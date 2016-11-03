/*jslint browser: true*/
'use strict';

import style from './style';
import store from './store';
const isArray = Array.isArray;
const keys    = Object.keys;
const Browser = {
    webkit: 'Webkit',
    ms: 'ms',
    moz: 'Moz'
};

const ucfirst = (str)=>
{
    return str.charAt(0).toUpperCase() + str.substr(1);
}

const genStyleId = ()=>
{
  store.counter += 1;
  return 'c'+ store.counter+ '_';
}

const createStyle = (css, selector, styleId) =>
{
  if (!css) {
    return;
  }

  if ('undefined' === typeof styleId) {
    styleId = genStyleId();
  } else if (store.registry[styleId]) {
    return store.registry[styleId];
  }

  if (!isArray(css)) {
        css = [css];
  } 
  let styles = [];
  let cssKeys;
  let key;
  for (let i=0, len=css.length; i < len; i++) { 
      cssKeys = keys(css[i]);
      styles[i] = {};
      for (let j = 0, jlen = cssKeys.length; j < jlen; j++) {
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

  let styleDecl = new style(styles, selector, styleId);
  store.styles.push(styleDecl);
  store.newStyles.push(styleDecl);
  return styleDecl;
}

export default createStyle;
