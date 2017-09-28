'use strict';

const isArray = Array.isArray;
const keys    = Object.keys;

function applyClassName(props, style, order)
{
    if (!props.className) {
      props.className = '';
    }
    props.className += ' ' + style.styleId;
    for (let j = 1; j <= order; j++) {
      props.className += ' ' + style.styleId + j;
    }
    return order + 1;
}

function applyInlineStyle(props, styles, order)
{
    if (isArray(styles.selector)) {
        return order;
    }
    if (!props.style) {
        props.style = {};
    }
    styles.style.forEach((one)=>{
        let  styleKeys = keys(one);
        styleKeys.forEach((key)=>{
            props.style[key] = one[key];
        });
    });
    return order;
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
    styles.forEach((one)=>{
        order = applyStyle(props, one, order);
    });
  }
  else {
    applyStyle(props, styles, order);
  }
}

export default applyStyles;
