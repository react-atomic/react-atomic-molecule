//@ts-check

import hyphenateStyleName from "hyphenate-style-name";
import { IS_ARRAY, KEYS, NEW_OBJ } from "reshow-constant";
import replicateSelector from "./replicateSelector";
import StyleObject from "./StyleObject";

/**
 * @typedef {object} CSSProps
 * @property {string[]} styleIds
 * @property {object} styleObjMap
 * @property {object} styleRuleMap
 */

// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
const unquotedContentValueRegex =
  /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

const browsers = ["webkit", "moz"];

/**
 * @param {string} key
 * @param {string} value
 */
const buildOneRule = (key, value) => {
  if (null == value) {
    return "";
  }

  if (key === "content" && !unquotedContentValueRegex.test(value)) {
    value = "'" + value.replace(/'/g, "\\'") + "'";
  }
  return hyphenateStyleName(key) + ": " + value + ";";
};

/**
 * @param {object[]} rules
 * @param {(string|string[])} selector
 */
const buildRules = (rules = [], selector) => {
  if (!rules || !rules.length) {
    return;
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
        rule[styleKey].forEach(
          /**
           * @param {string} item
           */
          (item) => (mycss += buildOneRule(styleKey, item))
        );
      } else {
        mycss += buildOneRule(styleKey, rule[styleKey]);
      }
    });
    mycss += "}";
    myRules.push(mycss);
  });
  let myRule = myRules.join("\n");

  if (parentSelector) {
    const mycssArr = [parentSelector + " {\n" + myRule + "\n}\n"];
    const keyframesString = "keyframes";
    if (1 === parentSelector.indexOf(keyframesString)) {
      browsers.forEach((browser) => {
        mycssArr.push(
          parentSelector.replace(
            "@" + keyframesString,
            `@-${browser}-${keyframesString}`
          ) + `{\n${myRule}\n}\n`
        );
      });
    }
    myRule = mycssArr.join("\n");
  }
  return myRule;
};

/**
 * @param {CSSProps} result
 * @param {StyleObject} oStyle
 */
const buildStyle = (result, oStyle) => {
  const { styleId } = oStyle;
  if (!styleId || result.styleRuleMap[styleId]) {
    return;
  }
  let selector = oStyle.selector;
  if (selector) {
    if (IS_ARRAY(selector)) {
      selector = selector.slice(0);
      if (!selector[1]) {
        selector[1] = replicateSelector(styleId);
      }
    }
  } else {
    selector = replicateSelector(styleId);
  }
  result.styleObjMap[styleId] = oStyle; //for check already inject
  result.styleRuleMap[styleId] = buildRules(oStyle.styleRules, selector);
  result.styleIds.push(styleId);
};

/**
 * @param {object[]} styles
 * @returns {CSSProps}
 */
const stylesToCSS = (styles) => {
  const result = {
    styleIds: [],
    styleObjMap: NEW_OBJ(),
    styleRuleMap: NEW_OBJ(),
  };
  styles && styles.forEach((oStyle) => buildStyle(result, oStyle));
  return result;
};

export default stylesToCSS;
