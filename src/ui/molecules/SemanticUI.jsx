// @ts-check

import { createElement } from "react";
import { html } from "react-atomic-atom";
import get from "get-object-value";
import { KEYS, HAS } from "reshow-constant";

import injectStyle from "../../lib/styles/injectStyle";
import bindStyles from "../../lib/styles/bindStyles";
import { bindChildKey } from "../../getChildMapping";

/**
 * @param {boolean} render
 * @param {import("react").ReactNode} children
 * @returns {React.ReactNode}
 */
const getChildren = (render, children) =>
  render && children != null ? bindChildKey(children) : null;

/**
 * @typedef {Object} UIProps
 */

/**
 * @type React.FC<UIProps>
 * @returns {React.ReactElement}
 */
const SemanticUI = ({
  ui = true,
  renderChildren = true,
  refCb,
  atom,
  children,
  styles,
  styleOrder,
  ...restProps
}) => {
  const atoms = html;
  atom = null != atom ? atom : atoms.default;
  switch (atom) {
    case "null":
      return null;
    default:
      const componentData = get(atoms, [atom]);
      if (componentData) {
        if (HAS(componentData, "renderChildren")) {
          renderChildren = componentData.renderChildren;
        }
        if (HAS(componentData, "ui")) {
          renderChildren = componentData.ui;
        }
      }
      break;
  }
  if (styles) {
    const { className, style } = restProps;
    // Need avoid props pass by ref !!important!!
    injectStyle();
    // bindStyles need after inject
    const bindProps = bindStyles({
      className,
      style,
      styles,
      styleOrder,
    });
    KEYS(bindProps).forEach((key) => (restProps[key] = bindProps[key]));
  }
  if (ui) {
    /**
     * Need put after bindProps
     *!!important!! restProps.className maybe effect by bindProps, so use it here.
     */
    restProps.className = restProps.className
      ? restProps.className + " ui"
      : "ui";
  }
  if (refCb) {
    restProps.ref = refCb;
  }
  return createElement(atom, restProps, getChildren(renderChildren, children));
};

export default SemanticUI;
