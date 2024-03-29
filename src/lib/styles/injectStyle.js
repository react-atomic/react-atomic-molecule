//@ts-check

import { hasWin } from "win-doc";
import { inject, create } from "create-el";
import query from "css-query-selector";
import { KEYS } from "reshow-constant";

import store from "./store";
import stylesToCSS from "./stylesToCSS";
import getStyleTagId from "./getStyleTagId";

/**
 * @typedef {object} CSSProps
 * @property {string[]} styleIds
 * @property {object} styleObjMap
 * @property {object} styleRuleMap
 */

/**
 * @param {CSSProps} props
 */
const appendCss = ({ styleIds, styleObjMap, styleRuleMap }) => {
  styleIds.forEach((key) => {
    store.registry[key] = styleObjMap[key];
    const id = getStyleTagId(key);
    const css = styleRuleMap[key];

    if (!hasWin()) {
      console.log(`<style id="${id}">${css}</style>`);
      return;
    }

    let styleDom = query.one("#" + id);
    if (styleDom) {
      styleDom.innerHTML = css;
    } else {
      styleDom = create("style")()({
        id,
        innerHTML: css,
      });
      inject(() => query.one("head"))(styleDom);
    }
  });
};

/**
 * @param {object} [styles]
 */
const injectStyle = (styles) => {
  if (styles) {
    KEYS(styles).forEach((key) => store.newStyles.push(styles[key]));
  }
  if (!store.newStyles.length) {
    // In Node (Server Side)  or Styles are already injected
    return null;
  }
  const compiled = stylesToCSS(store.newStyles);
  store.newStyles = [];
  if (compiled.styleIds.length) {
    appendCss(compiled);
  }
};

export default injectStyle;
