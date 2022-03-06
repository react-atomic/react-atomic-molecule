import { doc } from "win-doc";
import { inject, create } from "create-el";
import query from "css-query-selector";
import { KEYS } from "reshow-constant";

import store from "./store";
import stylesToCSS from "./stylesToCSS";

const appendCss = (cssArr) => {
  KEYS(cssArr).forEach((key) => {
    const id = "react-style-" + key;
    let styleDom = query.one("#" + id);
    const css = cssArr[key];
    if (styleDom) {
      styleDom.innerHTML = css;
    } else {
      styleDom = create("style")()({
        id,
        innerHTML: css,
      });
      inject(() => doc().getElementsByTagName("head")[0])(styleDom);
    }
  });
};

const injectStyle = () => {
  if (!store.newStyles.length) {
    // We are in Node or Styles are already injected
    return null;
  }
  const compiled = stylesToCSS(store.newStyles);
  store.lastCompiled = compiled;
  store.newStyles = [];
  KEYS(compiled.styleIds).forEach(
    (key) => (store.registry[key] = compiled.styleIds[key])
  );
  if (compiled.css) {
    if (doc().URL) {
      appendCss(compiled.cssArr);
    } else {
      console.log(compiled.css);
    }
  }
};

export default injectStyle;
