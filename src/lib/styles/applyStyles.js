const isArray = Array.isArray;
const keys = Object.keys;

const applyClassName = (props, order, oStyle) => {
  if (!props.className) {
    props.className = "";
  }
  const styleId = oStyle.styleId;
  props.className += " " + styleId;
  for (let j = 1; j <= order; j++) {
    props.className += " " + styleId + j;
  }
  return order;
};

const applyInlineStyle = (props, order, oStyle) => {
  if (isArray(oStyle.selector)) {
    return order;
  }
  if (!props.style) {
    props.style = {};
  }
  oStyle.style.forEach((one) =>
    keys(one).forEach((key) => (props.style[key] = one[key]))
  );
  return order;
};

const applyStyle = (props, order) => (oStyle) => {
  if (!oStyle) {
    return order;
  }
  if (!oStyle.isCompiled) {
    console.warn("Not a style object", oStyle);
    return order;
  }
  return oStyle.isCompiled() && order < 10
    ? applyClassName(props, order, oStyle)
    : applyInlineStyle(props, order, oStyle);
};

const applyStyles = (props, styles, order) => {
  if (isNaN(order)) {
    order = 0;
  }
  if (!isArray(styles)) {
    styles = [styles];
  }
  const apply = applyStyle(props, order);
  styles.forEach((one) => apply(one));
};

export default applyStyles;
