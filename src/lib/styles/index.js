import ucfirst from "ucfirst-js";
import StyleObject from "./StyleObject";
import store from "./store";
import nToU from "./cssNumberToUnit";

import { IS_ARRAY, KEYS, UNDEFINED } from "reshow-constant";

const Browser = {
  webkit: "Webkit",
  ms: "ms",
  moz: "Moz",
};

const genStyleId = () => {
  store.counter += 1;
  return "c" + store.counter + "_";
};

const createStyle = (css, selector, styleId) => {
  if (!css) {
    return;
  }
  if (UNDEFINED === typeof styleId) {
    styleId = genStyleId();
  } else if (store.registry[styleId]) {
    return store.registry[styleId];
  }
  if (!IS_ARRAY(css)) {
    css = [css];
  }

  const styles = [];
  css.forEach((one, i) => {
    styles[i] = {};
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
  });

  const styleDecl = new StyleObject(styles, selector, styleId);
  store.newStyles.push(styleDecl);
  return styleDecl;
};

export default createStyle; // reactStyle(css, selector, styleId)
