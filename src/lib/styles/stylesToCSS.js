'use strict';
import hyphenateStyleName from 'hyphenate-style-name';
import isUnitlessNumber from './cssUnitLessNumber';

// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
const unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

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
  return hyphenateStyleName(key) + ': ' + value + ';\n';
}

function buildRules(result, rules, selector) {
  if (Object.keys(rules).length === 0) {
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
  for (let i = 0, ilen = rules.length; i < ilen; i++ ) {
      styleKeys = Object.keys(rules[i]);
      mycss += selector[i] + ' {\n';
      for (let j = 0, jlen = styleKeys.length; j < jlen; j++) {
        let styleKey = styleKeys[j];
        value = rules[i][styleKey];
        mycss += buildRule(styleKey, value);
      }
      mycss += '}\n';
  }

  if (parentSelector) {
      var keyframesString = '@keyframes';
      if (0===parentSelector.indexOf(keyframesString)) {
        const browsers = ['webkit','moz'];
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
  return [
      s,
      s + (s + 1),
      s + (s + 1) + (s + 2),
      s + (s + 1) + (s + 2) + (s + 3),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5) + (s + 6),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5) + (s + 6) + (s + 7),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5) + (s + 6) + (s + 7) + (s + 8),
      s + (s + 1) + (s + 2) + (s + 3) + (s + 4) + (s + 5) + (s + 6) + (s + 7) + (s + 8) + (s + 9)
  ].join(',');
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
    for (let i = 0, len = styles.length; i < len; i++) {
        buildStyle(result, styles[i]);
    }
    return result;
}

module.exports = stylesToCSS;
