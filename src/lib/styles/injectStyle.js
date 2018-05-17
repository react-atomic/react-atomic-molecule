import store from './store.js';
import stylesToCSS from './stylesToCSS';

const doc = ('undefined' !== typeof document) ? document : null;

const reInjectStyle = () => {
    store.newStyles = Object.values(store.registry);
    injectStyle();
};

const appendCss = css => {
    let tag = doc.createElement('style');
    tag.innerHTML = css;
    doc.getElementsByTagName('head')[0].appendChild(tag);
};

const injectStyle = () => {
    if (!store.newStyles.length){
      // We are in Node or Styles are already injected
      return null;
    }
    const compiled = stylesToCSS(store.newStyles);
    store.newStyles = [];
    store.registry = { 
        ...store.registry,
        ...compiled.styleIds
    };
    if(compiled.css){
        if (doc) {
            appendCss(compiled.css);
        } else {
            console.log(compiled.css);
        }
    }
};

export {reInjectStyle};
export default injectStyle;
