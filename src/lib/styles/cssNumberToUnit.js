//@ts-check

import { isUnitlessNumber } from "./cssUnitLessNumber";
import { IS_ARRAY, NUMBER } from "reshow-constant";

/**
 * @param {string} v
 * @returns {string}
 */
const appendPx = (v) => (v && NUMBER === typeof v ? v + "px" : v);

/**
 * @param {string} key
 * @param {any} value
 * @returns {string|string[]}
 */
const cssNumberToUnit = (key, value) => {
  if (isUnitlessNumber[key]) {
    return value;
  }
  return IS_ARRAY(value) ? value.map((v) => appendPx(v)) : appendPx(value);
};

export default cssNumberToUnit;
