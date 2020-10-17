/*jslint browser: true*/
"use strict";
import store from "./store";

function Style(style, selector, styleId) {
  this.style = style;
  this.selector = selector;
  this.styleId = styleId;
}

Style.prototype.isCompiled = function () {
  const registry = store.registry;
  return registry && registry[this.styleId];
};

export default Style;
