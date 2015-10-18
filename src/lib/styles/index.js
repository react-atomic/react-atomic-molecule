/*jslint browser: true*/
'use strict';

var Style    = require('./Style');
var Store    = require('./store.js');
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
  Store.counter += 1;
  return 'c'+ Store.counter+ '_';
}

function createStyle(css, selector, styleId)
{
  styleId = styleId || genStyleId();
  if (!isArray(css)) {
        css = [css];
  } 
  var style = [];
  var cssKeys;
  var key;
  var j;
  var jlen;
  for (var i=0, len=css.length; i < len; i++) { 
      cssKeys = keys(css[i]);
      style[i] = {};
      for (j = 0, jlen = cssKeys.length; j < jlen; j++) {
        key = cssKeys[j];
        if (isArray(css[i][key])) {
            style[i][Browser.webkit+ucfirst(key)] = 
            style[i][Browser.ms+ucfirst(key)]     = 
            style[i][Browser.moz+ucfirst(key)]    = 
            style[i][key]                         = css[i][key][0];
        } else {
            style[i][key] = css[i][key];
        }
      }
  }

  var styleDecl = new Style(style, styleId, selector);
  Store.styles.push(styleDecl);
  Store.newStyles.push(styleDecl);
  return styleDecl;
}

module.exports = createStyle;
