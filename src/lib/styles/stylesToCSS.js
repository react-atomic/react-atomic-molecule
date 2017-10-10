'use strict';
import hyphenateStyleName from 'hyphenate-style-name';

// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
const unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

const isArray = Array.isArray;
const keys    = Object.keys;
const browsers = ['webkit','moz'];

function buildRule(key, value) {
  if (null === value) {
    return '';
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
  if (isArray(selector)) {
       parentSelector = selector[0].trim(); 
       selector.shift();
  } else {
       selector = [selector];
  }

  rules.forEach((rule, i)=>{
      mycss += selector[i] + ' {\n';
      keys(rule).forEach((styleKey)=>{
          if (rule[styleKey] && rule[styleKey].forEach) {
            rule[styleKey].forEach((item)=>
                mycss += buildRule(styleKey, item)
            );
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
        if (isArray(selector) && !selector[1]) {
            selector[1] = replicateSelector('.' + style.styleId);
        }
    } else {
        selector = replicateSelector('.' + style.styleId);
    }
    result.styleIds[style.styleId] = style; //for check already inject
    buildRules(result, style.style, selector);
}

function stylesToCSS(styles) {
    if (!isArray(styles)) {
        styles = [styles];
    }
    let result = {css: '', styleIds: {}};
    styles.forEach((style)=>{
        buildStyle(result, style);
    });
    return result;
}

export default stylesToCSS;
