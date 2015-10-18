/*jslint browser: true*/
'use strict';
var Store = require('./store.js');

function Style(style, styleId, selector) {
  this.style = style;
  this.styleId = styleId;
  this.selector = selector;
}

Style.prototype.isCompiled = function() {
    var registry = Store.registry;
    return registry && registry[this.styleId];
};

module.exports = Style;
