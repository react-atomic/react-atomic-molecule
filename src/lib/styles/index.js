//@ts-check

import ucfirst from "ucfirst-js";
import StyleObject from "./StyleObject";
import store from "./store";
import nToU from "./cssNumberToUnit";
import genStyleId from "./genStyleId";

import { IS_ARRAY, KEYS, NEW_OBJ } from "reshow-constant";

const Browser = {
  webkit: "Webkit",
  ms: "ms",
  moz: "Moz",
};

/**
 * @param {any[]|any} css
 * @param {string|string[]} [selector]
 * @param {string|boolean} [styleId]
 * @returns {StyleObject|undefined}
 */
const createStyle = (css, selector, styleId) => {
  if (!css) {
    return;
  }
  const thisStyleId =
    null == styleId ? genStyleId() : /** @type {string}*/ (styleId);
  if (store.registry[thisStyleId]) {
    return store.registry[thisStyleId];
  }
  if (!IS_ARRAY(css)) {
    css = [css];
  }

  const styles = [];
  css.forEach(
    /**
     * @param {any} one
     * @param {number} i
     */
    (one, i) => {
      styles[i] = NEW_OBJ();
      KEYS(one).forEach((key) => {
        if (IS_ARRAY(one[key]) && 1 === one[key].length) {
          const ucFirstKey = ucfirst(key);
          styles[i][Browser.webkit + ucFirstKey] =
            styles[i][Browser.ms + ucFirstKey] =
            styles[i][Browser.moz + ucFirstKey] =
            styles[i][key] =
              nToU(key, one[key][0]);
        } else {
          styles[i][key] = nToU(key, one[key]);
        }
      });
    }
  );

  let styleDecl;
  if (thisStyleId) {
    styleDecl = new StyleObject(styles, selector, thisStyleId);
    store.newStyles.push(styleDecl);
  } else {
    // will not push to injectStyle queue
    styleDecl = new StyleObject(styles);
  }
  return styleDecl;
};

export default createStyle; // reactStyle(css, selector, styleId)
