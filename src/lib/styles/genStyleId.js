//@ts-check

import store from "./store";

/**
 * @param {string} name
 * @returns {string}
 */
const genStyleId = (name = "c") => name + store.counter++ + "_";

export default genStyleId;
