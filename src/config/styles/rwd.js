//@ts-check

import { NEW_OBJ, KEYS } from "reshow-constant";

/**
 * https://purecss.io/grids/#pure-responsive-grids
 * https://www.w3schools.com/tags/ref_pxtoemconversion.asp
 *
 * if default pixel size eq 16px
 *
 * 35.5.em -> 568px
 * 48em -> 768px
 * 64em -> 1024px
 * 80em -> 1280px
 * 120em -> 1920px
 */
const pageWidth = {
  sm: "35.5em",
  md: "48em",
  lg: "64em",
  xl: "80em",
  xxl: "120em",
};

/**
 * @typedef PageWidth
 * @type {any}
 */

/**
 * @param {string} type
 * @returns {PageWidth}
 */
const getConfig = (type) => {
  const next = NEW_OBJ();
  KEYS(pageWidth).forEach((key) => {
    next[key] = `@media screen and (${type}-width: ${pageWidth[key]})`;
  });
  return next;
};

const min = getConfig("min");
const max = getConfig("max");

export { min, max, pageWidth };
