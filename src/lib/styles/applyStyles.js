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
      props.className += ' ' + style.className + (j === 0 ? '' : j);
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
  var styleKeys = keys(style.style);
  for (var i = 0, l = styleKeys.length; i < l; i++) {
    var key = styleKeys[i];
    props.style[key] = style.style[key];
    applyOverrides(props, key);
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
      order = applyStyles(props, styles[i], order);
    }
    return order;
  }
  else {
    return applyStyle(props, styles, order);
  }
}

module.exports = applyStyles;
