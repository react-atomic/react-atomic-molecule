import ucfirst from "ucfirst";
import style from "./style";
import store from "./store";
import nToU from "./cssNumberToUnit";

const isArray = Array.isArray;
const keys = Object.keys;
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
  if ("undefined" === typeof styleId) {
    styleId = genStyleId();
  } else if (store.registry[styleId]) {
    return store.registry[styleId];
  }
  if (!isArray(css)) {
    css = [css];
  }

  let styles = [];
  css.forEach((one, i) => {
    styles[i] = {};
    keys(one).forEach((key) => {
      if (isArray(one[key]) && 1 === one[key].length) {
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

  const styleDecl = new style(styles, selector, styleId);
  store.newStyles.push(styleDecl);
  return styleDecl;
};

export default createStyle; // reactStyle(css, selector, styleId)
