var Store                  = require('./store.js');
var ApplyStyle             = require('./applyStyles');
var stylesToCSS            = require('./stylesToCSS');
var ExecutionEnvironment   = require('exenv');
var assign                 = require("object-assign-sorted");

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
        style: myStyle,
        styles: undefined
    };
    var order=0;
    if('undefined'!==typeof props.styleOrder){
        order=props.styleOrder;
    }
    ApplyStyle(newStyleProps,props.styles,order);
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
        if(ExecutionEnvironment.canUseDOM){
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
