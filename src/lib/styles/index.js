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
  css.forEach((one, i)=> {
      cssKeys = keys(one);
      styles[i] = {};
      cssKeys.forEach((key)=>{
        if (isArray(one[key])) {
            let ucFirstKey = ucfirst(key);
            styles[i][Browser.webkit + ucFirstKey] =
            styles[i][Browser.ms + ucFirstKey]     =
            styles[i][Browser.moz + ucFirstKey]    =
            styles[i][key] = one[key][0];
        } else {
            styles[i][key] = one[key];
        }
      });
  });

  const styleDecl = new style(styles, selector, styleId);
  store.newStyles.push(styleDecl);
  return styleDecl;
}

export default createStyle;
