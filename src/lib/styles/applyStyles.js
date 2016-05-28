'use strict';

var CSSProperty = require('react/lib/CSSProperty');
var isArray     = Array.isArray;
var keys        = Object.keys;

// TODO: Is this enough?
var COMPLEX_OVERRIDES = CSSProperty.shorthandPropertyExpansions;


function applyClassName(props, style, order)
{
    if (!props.className) {
      props.className = '';
    }
    for (var j = 0; j < order + 1; j++) {
      props.className += ' ' + style.styleId + (j === 0 ? '' : j);
    }
    return order + 1;
}

function applyInlineStyle(props, style, order)
{
  if (isArray(style.selector)) {
        return order;
  }
  if (!props.style) {
    props.style = {};
  }
  var key;
  var j;
  var jlen;
  var styleKeys;
  for (var i = 0, len = style.style.length; i < len; i++) {
      styleKeys = keys(style.style[i]);
      for (var j = 0, jlen = styleKeys.length; j < jlen; j++) {
        key = styleKeys[j];
        props.style[key] = style.style[i][key];
        applyOverrides(props, key);
      }
  }

  return order;
}

function applyOverrides(props, key)
{
  var overrides = COMPLEX_OVERRIDES[key];
  if (overrides) {
    var overridesKeys = keys(overrides);
    for (var i = 0, l = overridesKeys.length; i < l; i++) {
      var overrideKey = overridesKeys[i];
      props.style[overrideKey] = '';
    }
  }
}

function applyStyle(props, style, order)
{
  if (style === null || style === undefined || style === false) {
    return order;
  } 
  if (style.isCompiled() && order < 10) {
        return applyClassName(props, style, order);
  } else {
        return applyInlineStyle(props, style, order);
  }
}

function applyStyles(props, styles, order)
{
  if (order === undefined) {
    order = 0;
  }
  if (isArray(styles)) {
    for (var i = 0, len = styles.length; i < len; i++) {
      order = applyStyle(props, styles[i], order);
    }
  }
  else {
    applyStyle(props, styles, order);
  }
}

module.exports = applyStyles;
