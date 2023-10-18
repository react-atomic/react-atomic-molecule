// @ts-check

import { createElement } from "react";
import { html } from "react-atomic-atom";
import get from "get-object-value";
import { KEYS, HAS } from "reshow-constant";

import injectStyle from "../../lib/styles/injectStyle";
import bindStyles from "../../lib/styles/bindStyles";
import { bindChildKey } from "../../getChildMapping";
import useCSSHook from "../../hooks/useCSS";

/**
 * @param {boolean} render
 * @param {import("react").ReactNode} children
 * @returns {React.ReactNode}
 */
const getChildren = (render, children) =>
  render && children != null ? bindChildKey(children) : null;

class CSSType {
  /**
   * @type string[]
   */
  cssModule;
  /**
   * @type string
   */
  cssGroup;
}

/**
 * @typedef {object} SemanticUIProps
 * @property {boolean=} ui
 * @property {boolean=} renderChildren
 * @property {Object<any, React.ReactNode>=} atoms
 * @property {string=} atom
 * @property {function=} useCSS
 * @property {CSSType[]=} cssList
 * @property {function=} refCb
 * @property {React.ReactNode=} children
 * @property {Object=} styles
 * @property {number=} styleOrder
 * @property {string=} className
 * @property {React.CSSProperties=} style
 * @property {React.RefObject|function=} ref
 */

/**
 * @param {SemanticUIProps&React.HTMLProps} props
 * @returns {React.ReactElement | null}
 */
const SemanticUI = ({
  ui = true,
  renderChildren = true,
  atoms = html,
  useCSS = useCSSHook,
  cssList = [],
  refCb,
  atom,
  children,
  styles,
  styleOrder,
  ...restProps
}) => {
  /**
   * @type string
   */
  const nextAtom = null != atom ? atom : atoms.default;
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
      /** @type any*/ className,
      style,
      styles,
      styleOrder,
    });
    KEYS(bindProps).forEach((key) => (restProps[key] = bindProps[key]));
  }
  if (ui) {
    cssList.forEach(({ cssModule, cssGroup }) => useCSS(cssModule, cssGroup));
    /**
     * Need put after bindProps
     *!!important!! restProps.className maybe effect by bindProps, so use it here.
     */
    restProps.className = restProps.className
      ? restProps.className + " ui"
      : "ui";
  }
  if (refCb) {
    restProps.ref = /**@type any*/ (refCb);
  }
  return createElement(
    nextAtom,
    restProps,
    getChildren(renderChildren, children)
  );
};

export default SemanticUI;
