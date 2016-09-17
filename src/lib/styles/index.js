/*jslint browser: true*/
'use strict';

import style from './style';
import store from './store';
var isArray  = Array.isArray;
var keys     = Object.keys;

var Browser = {
    webkit: 'Webkit',
    ms: 'ms',
    moz: 'Moz'
};

function ucfirst(str)
{
    return str.charAt(0).toUpperCase() + str.substr(1);
}

function genStyleId()
{
  store.counter += 1;
  return 'c'+ store.counter+ '_';
}

const createStyle = (css, selector, styleId) =>
{
  if (!css) {
    return;
  }
  styleId = styleId || genStyleId();
  if (!isArray(css)) {
        css = [css];
  } 
  var styles = [];
  var cssKeys;
  var key;
  var j;
  var jlen;
  for (var i=0, len=css.length; i < len; i++) { 
      cssKeys = keys(css[i]);
      styles[i] = {};
      for (j = 0, jlen = cssKeys.length; j < jlen; j++) {
        key = cssKeys[j];
        if (isArray(css[i][key])) {
            styles[i][Browser.webkit+ucfirst(key)] = 
            styles[i][Browser.ms+ucfirst(key)]     = 
            styles[i][Browser.moz+ucfirst(key)]    = 
            styles[i][key]                         = css[i][key][0];
        } else {
            styles[i][key] = css[i][key];
        }
      }
  }

  var styleDecl = new style(styles, styleId, selector);
  store.styles.push(styleDecl);
  store.newStyles.push(styleDecl);
  return styleDecl;
}

export default createStyle;
