import {doc} from 'win-doc';
import store from './store.js';
import stylesToCSS from './stylesToCSS';
import {inject, create} from 'create-el';
import query from 'css-query-selector';

const reInjectStyle = () => {
  store.newStyles = Object.values(store.registry);
  injectStyle();
};

const keys = Object.keys;

const appendCss = cssArr => {
  keys(cssArr).forEach(key => {
    const id = 'react-style-'+key;
    let styleDom = query.one('#' + id);
    const css = cssArr[key];
    if (styleDom) {
      styleDom.innerHTML = css;
    } else {
      styleDom = create('style')()({
        id,
        innerHTML: css,
      });
      inject(() => doc().getElementsByTagName('head')[0])(styleDom);
    }
  });
};

const injectStyle = () => {
  if (!store.newStyles.length) {
    // We are in Node or Styles are already injected
    return null;
  }
  const compiled = stylesToCSS(store.newStyles);
  store.newStyles = [];
  store.registry = {
    ...store.registry,
    ...compiled.styleIds,
  };
  if (compiled.css) {
    if (doc().URL) {
      appendCss(compiled.cssArr);
    } else {
      console.log(compiled.css);
    }
  }
};

export {reInjectStyle};
export default injectStyle;
