import store from "./store";

function StyleObject(style, selector, styleId) {
  this.style = style;
  this.selector = selector;
  this.styleId = styleId;
}

StyleObject.prototype.isCompiled = function () {
  const registry = store.registry;
  return registry && registry[this.styleId];
};

export default StyleObject;
