//@ts-check

import { IS_ARRAY, KEYS } from "reshow-constant";
import StyleObject from "./StyleObject";

/**
 * @param {object} props
 * @param {number} order
 * @param {StyleObject} oStyle
 * @returns {props}
 */
const applyClassName = (props, order, oStyle) => {
  const styleId = oStyle.styleId;
  const arr = [styleId];
  for (let j = 1; j <= order; j++) {
    arr.push(styleId + j);
  }
  props.className =
    (props.className ? props.className + " " : "") + arr.join(" ");
  return props;
};

/**
 * @param {object} props
 * @param {StyleObject} oStyle
 * @returns {props}
 */
const applyInlineStyle = (props, oStyle) => {
  if (IS_ARRAY(oStyle.selector)) {
    return props;
  }
  if (!props.style) {
    props.style = {};
  }
  oStyle.styleRules.forEach(
    /**
     * @param {object} one
     */
    (one) => KEYS(one).forEach((key) => (props.style[key] = one[key]))
  );
  return props;
};

/**
 * @param {object} props
 * @param {number} order
 */
const applyStyle =
  (props, order) =>
  /**
   * @param {object} oStyle
   * @returns {props}
   */
  (oStyle) => {
    if (!oStyle) {
      return props;
    }
    if (!oStyle.isCompiled) {
      console.warn("Not a style object", oStyle);
      return props;
    }
    return oStyle.isCompiled() && order < 10
      ? applyClassName(props, order, oStyle)
      : applyInlineStyle(props, oStyle);
  };

/**
 * @param {object} props
 * @param {StyleObject|StyleObject[]} styles
 * @param {number} order
 * @returns {props[]}
 */
const applyStyles = (props, styles, order) => {
  if (isNaN(order)) {
    order = 0;
  }
  if (!IS_ARRAY(styles)) {
    styles = [styles];
  }
  const doApply = applyStyle(props, order);
  return styles.map(
    /**
     * @param {StyleObject} one
     * @returns {props}
     */
    (one) => doApply(one)
  );
};

export default applyStyles;
