//@ts-check

import store from "./store";

class StyleObject {
  /**
   * @param {object[]} styleRules
   * @param {string|string[]} selector
   * @param {string} styleId
   */
  constructor(styleRules, selector, styleId) {
    this.styleRules = styleRules;
    this.selector = selector;
    this.styleId = styleId;
  }

  /**
   * @returns {boolean}
   */
  isCompiled() {
    const registry = store.registry;
    return registry && registry[this.styleId];
  }
}

export default StyleObject;
