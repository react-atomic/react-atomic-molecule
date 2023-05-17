//@ts-check

import store from "./store";

class StyleObject {
  /**
   * @param {object[]} styleRules
   * @param {string|string[]} [selector]
   * @param {string|boolean} [styleId]
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
    return registry && registry[/** @type {string}*/ (this.styleId)];
  }
}

export default StyleObject;
