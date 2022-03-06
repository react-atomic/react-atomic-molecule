import hyphenateStyleName from "hyphenate-style-name";
import get from "get-object-value";
import { IS_ARRAY, KEYS } from "reshow-constant";
import replicateSelector from "./replicateSelector";

// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
const unquotedContentValueRegex =
  /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

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
  if (IS_ARRAY(selector)) {
    parentSelector = selector[0].trim ? selector[0].trim() : selector[0];
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
    KEYS(rule).forEach((styleKey) => {
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

const buildStyle = (result, oStyle) => {
  const { styleId } = oStyle;
  if (!styleId || result.styleIds[styleId]) {
    return;
  }
  let selector = oStyle.selector;
  if (selector) {
    if (IS_ARRAY(selector) && !selector[1]) {
      selector[1] = replicateSelector(styleId);
    }
  } else {
    selector = replicateSelector(styleId);
  }
  result.styleIds[styleId] = oStyle; //for check already inject
  buildRules(result, styleId, selector);
};

const stylesToCSS = (styles) => {
  if (!IS_ARRAY(styles) && styles) {
    styles = [styles];
  }
  const result = { css: "", styleIds: {}, cssArr: {} };
  styles?.forEach((style) => buildStyle(result, style));
  return result;
};

export default stylesToCSS;
