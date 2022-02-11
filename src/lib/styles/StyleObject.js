import store from "./store";

class StyleObject {
  constructor(style, selector, styleId) {
    this.style = style;
    this.selector = selector;
    this.styleId = styleId;
  }

  isCompiled() {
    const registry = store.registry;
    return registry && registry[this.styleId];
  }
}

export default StyleObject;
