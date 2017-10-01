'use strict';
import hyphenateStyleName from 'hyphenate-style-name';
import isUnitlessNumber from './cssUnitLessNumber';

// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
const unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

const keys = Object.keys;
const browsers = ['webkit','moz'];

function buildRule(key, value) {
  if (null === value) {
    return '';
  }

  if (!isUnitlessNumber[key] && typeof value === 'number') {
    value += 'px';
  }

  if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    value = "'" + value.replace(/'/g, "\\'") + "'";
  }
  // TODO: escape value
  return hyphenateStyleName(key) + ': ' + value + ';';
}

function buildRules(result, rules, selector) {
  if (keys(rules).length === 0) {
    return result;
  }
  var mycss = '';
  var parentSelector = '';
  if (Array.isArray(selector)) {
       parentSelector = selector[0].trim(); 
       selector.shift();
  } else {
       selector = [selector];
  }
  
  var styleKeys;
  var value;

  rules.forEach((rule, i)=>{
      styleKeys = keys(rule);
      mycss += selector[i] + ' {\n';
      styleKeys.forEach((styleKey)=>{
          if (rule[styleKey].map) {
            mycss += rule[styleKey].map((item)=>buildRule(styleKey, item));
          } else {
            mycss += buildRule(styleKey, rule[styleKey]);
          }
      });
      mycss += '}\n\n';
  });

  if (parentSelector) {
      var keyframesString = '@keyframes';
      if (0===parentSelector.indexOf(keyframesString)) {
        browsers.forEach((browser)=>{
            result.css += parentSelector.replace(
                    keyframesString,
                    '@-'+browser+'-keyframes'
            ) + ' {\n'+ mycss+ '}\n';
        });
      }
      result.css += parentSelector+ ' {\n'+ mycss+ '}\n';
  } else {
      result.css += mycss;
  }
  return result;
}

function replicateSelector(s) {
    let a=[s];
    for (let i=1; i < 10; i++ ) {
        a[i] = a[(i-1)] + s + i;
    }
    return a.join(',');
}

function buildStyle(result, style, selector) {
    if (!style.styleId || result.styleIds[style.styleId]) {
        return;
    }
    if (style.selector) {
        selector=style.selector;
        if (Array.isArray(selector) && !selector[1]) {
            selector[1] = replicateSelector('.' + style.styleId);
        }
    } else {
        selector = replicateSelector('.' + style.styleId);
    }
    result.styleIds[style.styleId] = style; //for check already inject
    buildRules(result, style.style, selector);
}

function stylesToCSS(styles) {
    if (!Array.isArray(styles)) {
        styles = [styles];
    }
    let result = {css: '', styleIds: {}};
    styles.forEach((style)=>{
        buildStyle(result, style);
    });
    return result;
}

export default stylesToCSS;
