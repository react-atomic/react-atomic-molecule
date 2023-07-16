//@ts-check

import store from "./store";

class StyleObject {
  /**
   * @param {object[]} styleRules
   * @param {string|string[]|boolean} [selector]
   * @param {string|boolean} [styleId]
   */
  constructor(styleRules, selector, styleId) {
    this.styleRules = styleRules;
    /**
     * @type {string|string[]}
     */
    this.selector = /** @type string|string[]*/ (selector) || "";
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
