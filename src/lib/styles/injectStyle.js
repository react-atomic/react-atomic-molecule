import Store from './store.js';
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
    if('undefined'!==typeof props.styleOrder){
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
    Store.newStyles=Store.styles;
    injectStyle();
};

const injectStyle = () => {
    if (!Store.newStyles.length){
      // We are in Node or Styles are already injected
      return null;
    }
    var compiled = stylesToCSS(Store.newStyles);
    Store.newStyles=[];
    Store.registry=assign(Store.registry,compiled.styleIds);
    if(compiled.css){
        if(executionEnvironment.canUseDOM){
            var tag = document.createElement('style');
            tag.innerHTML = compiled.css;
            document.getElementsByTagName('head')[0].appendChild(tag);
        }else{
            console.log(compiled.css);
        }
    }
};

export {bindStyles, reInjectStyle};
export default injectStyle;
