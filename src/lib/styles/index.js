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

function genClassName()
{
  Store.counter += 1;
  return 'c'+ Store.counter+ '_';
}

function createStyle(css, selector, className)
{
  className = className || genClassName();

  var style = {};
  var cssKeys = keys(css);
  for (var i = 0, l = cssKeys.length; i < l; i++) {
    var key = cssKeys[i];
    if (isArray(css[key])) {
        style[Browser.webkit+ucfirst(key)] = 
        style[Browser.ms+ucfirst(key)]     = 
        style[Browser.moz+ucfirst(key)]    = 
        style[key]                         = css[key][0];
    } else {
        style[key] = css[key];
    }
  }

  var styleDecl = new Style(style, className, selector);
  Store.styles.push(styleDecl);
  Store.newStyles.push(styleDecl);
  return styleDecl;
}

module.exports = createStyle;
