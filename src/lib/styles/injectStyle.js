import store from './store.js';
import ApplyStyle from './applyStyles';
import stylesToCSS from './stylesToCSS';

const doc = ('undefined' !== typeof document) ? document : null;

/**
 *  props.className
 *  props.style
 *  props.styles
 *  props.styleOrder
 */
const bindStyles = (props) => {
    let {className, style, styles, styleOrder} = props;
    if (!styleOrder) {
        styleOrder = 0;
    }
    let newStyleProps = {
        className: className,
        style: style
    };
    ApplyStyle(
        newStyleProps,
        styles,
        styleOrder
    );
    if ( !newStyleProps.className ) {
        delete newStyleProps.className;
    }
    if ( !newStyleProps.style ) {
        delete newStyleProps.style;
    }
    return newStyleProps;
};

const reInjectStyle = () => {
    store.newStyles = Object.values(store.registry);
    injectStyle();
};

const appendCss = (css) => {
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
        if(doc){
            appendCss(compiled.css);
        }else{
            console.log(compiled.css);
        }
    }
};

export {bindStyles, reInjectStyle};
export default injectStyle;
