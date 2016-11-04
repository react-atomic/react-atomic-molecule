import store from './store.js';
import ApplyStyle from './applyStyles';
import stylesToCSS from './stylesToCSS';
import {
    assign,
    executionEnvironment
} from '../../index';

/**
 *  props.className
 *  props.style
 *  props.styles
 *  props.styleOrder
 */
const bindStyles = (props) => {
    var myClass;
    var myStyle;
    var order=0;
    if( 'undefined' !== typeof props.className ){
        myClass=props.className;
    }
    if( 'undefined' !== typeof props.style ){
        myStyle=props.style;
    }
    if('undefined' !== typeof props.styleOrder){
        order=props.styleOrder;
    }
    var newStyleProps = {
        className: myClass,
        style: myStyle
    };
    ApplyStyle(
        newStyleProps,
        props.styles,
        order
    );
    if( !newStyleProps.className ){
        delete newStyleProps.className;
    }
    if( !newStyleProps.style ){
        delete newStyleProps.style;
    }
    return newStyleProps;
};

const reInjectStyle = () => {
    store.newStyles = Object.values(store.registry);
    injectStyle();
};

const appendCss = (css) => {
    let tag = document.createElement('style');
    tag.innerHTML = css;
    document.getElementsByTagName('head')[0].appendChild(tag);
};

const injectStyle = () => {
    if (!store.newStyles.length){
      // We are in Node or Styles are already injected
      return null;
    }
    const compiled = stylesToCSS(store.newStyles);
    store.newStyles = [];
    store.registry = assign(
        store.registry,
        compiled.styleIds
    );
    if(compiled.css){
        if(executionEnvironment.canUseDOM){
            appendCss(compiled.css);
        }else{
            console.log(compiled.css);
        }
    }
};

export {bindStyles, reInjectStyle};
export default injectStyle;
