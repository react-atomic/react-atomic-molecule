import { KEYS, T_TRUE } from "reshow-constant";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
export const isUnitlessNumber = {
  animationIterationCount: T_TRUE,
  borderImageOutset: T_TRUE,
  borderImageSlice: T_TRUE,
  borderImageWidth: T_TRUE,
  boxFlex: T_TRUE,
  boxFlexGroup: T_TRUE,
  boxOrdinalGroup: T_TRUE,
  columnCount: T_TRUE,
  columns: T_TRUE,
  flex: T_TRUE,
  flexGrow: T_TRUE,
  flexPositive: T_TRUE,
  flexShrink: T_TRUE,
  flexNegative: T_TRUE,
  flexOrder: T_TRUE,
  gridArea: T_TRUE,
  gridRow: T_TRUE,
  gridRowEnd: T_TRUE,
  gridRowSpan: T_TRUE,
  gridRowStart: T_TRUE,
  gridColumn: T_TRUE,
  gridColumnEnd: T_TRUE,
  gridColumnSpan: T_TRUE,
  gridColumnStart: T_TRUE,
  fontWeight: T_TRUE,
  lineClamp: T_TRUE,
  lineHeight: T_TRUE,
  opacity: T_TRUE,
  order: T_TRUE,
  orphans: T_TRUE,
  tabSize: T_TRUE,
  widows: T_TRUE,
  zIndex: T_TRUE,
  zoom: T_TRUE,

  // SVG-related properties
  fillOpacity: T_TRUE,
  floodOpacity: T_TRUE,
  stopOpacity: T_TRUE,
  strokeDasharray: T_TRUE,
  strokeDashoffset: T_TRUE,
  strokeMiterlimit: T_TRUE,
  strokeOpacity: T_TRUE,
  strokeWidth: T_TRUE,
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
const prefixKey = (prefix, key) =>
  prefix + key.charAt(0).toUpperCase() + key.substring(1);

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
const prefixes = ["Webkit", "ms", "Moz", "O"];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
KEYS(isUnitlessNumber).forEach((prop) =>
  prefixes.forEach(
    (prefix) => (isUnitlessNumber[prefixKey(prefix, prop)] = T_TRUE)
  )
);
