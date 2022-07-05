import { IS_ARRAY, KEYS } from "reshow-constant";

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

const applyInlineStyle = (props, order, oStyle) => {
  if (IS_ARRAY(oStyle.selector)) {
    return props;
  }
  if (!props.style) {
    props.style = {};
  }
  oStyle.style.forEach((one) =>
    KEYS(one).forEach((key) => (props.style[key] = one[key]))
  );
  return props;
};

const applyStyle = (props, order) => (oStyle) => {
  if (!oStyle) {
    return props;
  }
  if (!oStyle.isCompiled) {
    console.warn("Not a style object", oStyle);
    return props;
  }
  return oStyle.isCompiled() && order < 10
    ? applyClassName(props, order, oStyle)
    : applyInlineStyle(props, order, oStyle);
};

const applyStyles = (props, styles, order) => {
  if (isNaN(order)) {
    order = 0;
  }
  if (!IS_ARRAY(styles)) {
    styles = [styles];
  }
  const apply = applyStyle(props, order);
  return styles.map((one) => apply(one));
};

export default applyStyles;
