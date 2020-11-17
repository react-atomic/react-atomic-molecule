import hyphenateStyleName from "hyphenate-style-name";
import get from "get-object-value";

// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
const unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

const isArray = Array.isArray;
const keys = Object.keys;
const browsers = ["webkit", "moz"];

const buildRule = (key, value) => {
  if (null == value) {
    return "";
  }

  if (key === "content" && !unquotedContentValueRegex.test(value)) {
    value = "'" + value.replace(/'/g, "\\'") + "'";
  }
  return hyphenateStyleName(key) + ": " + value + ";";
};

const buildRules = (result, styleId, selector) => {
  const rules = get(result.styleIds, [styleId, "style"], []);
  if (!rules.length) {
    return result;
  }
  let parentSelector;
  if (isArray(selector)) {
    parentSelector = selector[0].trim();
    selector.shift();
  } else {
    selector = [selector];
  }

  const myRules = [];
  rules.forEach((rule, i) => {
    let mycss = "";
    /**
     * if selector[i] is array will conver to string here.
     * Such [".foo", ".bar"] will conver to .foo,.bar
     */
    mycss += selector[i] + " {";
    keys(rule).forEach((styleKey) => {
      if (rule[styleKey] && rule[styleKey].forEach) {
        rule[styleKey].forEach((item) => (mycss += buildRule(styleKey, item)));
      } else {
        mycss += buildRule(styleKey, rule[styleKey]);
      }
    });
    mycss += "}";
    myRules.push(mycss);
  });
  let myRule = myRules.join("\n");

  if (parentSelector) {
    const mycssArr = [parentSelector + " {\n" + myRule + "\n}\n"];
    const keyframesString = "@keyframes";
    if (0 === parentSelector.indexOf(keyframesString)) {
      browsers.forEach((browser) => {
        mycssArr.push(
          parentSelector.replace(
            keyframesString,
            "@-" + browser + "-keyframes"
          ) +
            " {\n" +
            myRule +
            "\n}\n"
        );
      });
    }
    myRule = mycssArr.join("\n");
  }
  result.cssArr[styleId] = myRule;
  result.css += myRule;
  return result;
};

const replicateSelector = (s) => {
  s = "." + s;
  const a = [s];
  for (let i = 1; i < 10; i++) {
    a[i] = a[i - 1] + s + i;
  }
  return a.join(",");
};

const buildStyle = (result, oStyle) => {
  const { styleId } = oStyle;
  if (!styleId || result.styleIds[styleId]) {
    return;
  }
  let selector = oStyle.selector;
  if (selector) {
    if (isArray(selector) && !selector[1]) {
      selector[1] = replicateSelector(styleId);
    }
  } else {
    selector = replicateSelector(styleId);
  }
  result.styleIds[styleId] = oStyle; //for check already inject
  buildRules(result, styleId, selector);
};

const stylesToCSS = (styles) => {
  if (!isArray(styles) && styles) {
    styles = [styles];
  }
  const result = { css: "", styleIds: {}, cssArr: {} };
  styles?.forEach((style) => buildStyle(result, style));
  return result;
};

export default stylesToCSS;
