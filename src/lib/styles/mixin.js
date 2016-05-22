var Store                  = require('./store.js');
var ApplyStyle             = require('./applyStyles');
var stylesToCSS            = require('./stylesToCSS');
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
function buildProps(props){
    var myClass;
    var myStyle;
    if( 'undefined' !== typeof props.className ){
        myClass=props.className;
    }
    if( 'undefined' !== typeof props.style ){
        myStyle=props.style;
    }
    var newStyleProps = {
        className: myClass,
        style: myStyle
    };
    var order=0;
    if('undefined'!==typeof props.styleOrder){
        order=props.styleOrder;
    }
    ApplyStyle(
        newStyleProps,
        props.styles,
        order
    );
    return newStyleProps;
}

var ReactStyle = {
  bindStyles: buildProps,
  newStyleInject: function(){
    Store.newStyles=Store.styles;
  },
  injectStyle: function() {
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
  }
};
module.exports = ReactStyle;
