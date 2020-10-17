import applyStyles from "./applyStyles";

/**
 *  props.className
 *  props.style
 *  props.styles
 *  props.styleOrder
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
