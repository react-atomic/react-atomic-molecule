//@ts-check

import applyStyles from "./applyStyles";

/**
 * @typedef {object} StyleInputProps
 * @property {string} className
 * @property {object} style
 * @property {object|object[]} styles
 * @property {number} styleOrder
 */

/**
 * @typedef {object} StyleProps
 * @property {string} [className=null]
 * @property {object} [style=null]
 */

/**
 * @param {StyleInputProps} props
 * @returns {StyleProps}
 */
const bindStyles = ({ className, style, styles, styleOrder }) => {
  const newStyleProps = {
    className,
    style,
  };
  applyStyles(newStyleProps, styles, styleOrder);
  if (!newStyleProps.className) {
    delete newStyleProps.className;
  }
  if (!newStyleProps.style) {
    delete newStyleProps.style;
  }
  return newStyleProps;
};

export default bindStyles;
