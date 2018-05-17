'use strict';

const isArray = Array.isArray;
const keys    = Object.keys;

function applyClassName(props, style, order)
{
    if (!props.className) {
      props.className = '';
    }
    const styleId = style.styleId;
    props.className += ' ' + styleId;
    for (let j = 1; j <= order; j++) {
      props.className += ' ' + styleId + j;
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
    styles.style.forEach( one =>
        keys(one).forEach( 
            key => props.style[key] = one[key]
        )
    );
    return order;
}

function applyStyle(props, style, order)
{
    if (!style) {
        return order;
    } 
    if (!style.isCompiled) {
        console.error('Not a style object', style);
        console.trace();
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
    if (isNaN(order)) {
        order = 0;
    }
    if (!isArray(styles)) {
        styles = [styles];
    }
    styles.forEach( one =>
        order = applyStyle(props, one, order)
    );
}

export default applyStyles;
