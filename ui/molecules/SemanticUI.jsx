import { createElement } from "react";
import * as Atoms from "react-atomic-atom";
import get from "get-object-value";
import ucfirst from "ucfirst-js";
import { KEYS } from "reshow-constant";

import injectStyle from "../../src/lib/styles/injectStyle";
import bindStyles from "../../src/lib/styles/bindStyles";
import { bindChildKey } from "../../src/getChildMapping";

const getChildren = (render, children) =>
  render && children != null ? bindChildKey(children) : null;

const SemanticUI = ({
  ui = true,
  renderChildren = true,
  atom,
  children,
  styles,
  styleOrder,
  ...others
}) => {
  let component;
  switch (atom) {
    case "null":
      return null;
    case "input":
      component = Atoms.Input;
      renderChildren = false;
      break;
    case "img":
      component = Atoms.Img;
      renderChildren = false;
      break;
    case "path":
      component = Atoms.Path;
      renderChildren = false;
      ui = false;
      break;
    default:
      component = get(Atoms, [ucfirst(atom)], () => Atoms.Div);
      break;
  }
  // bindStyles need after inject
  if (styles) {
    const { className, style } = others;
    // Need avoid props pass by ref !!important!!
    injectStyle();
    const bindProps = bindStyles({
      className,
      style,
      styles,
      styleOrder,
    });
    KEYS(bindProps).forEach((key) => (others[key] = bindProps[key]));
  }
  if (ui) {
    /**
     * Need put after bindProps
     *!!important!! others.className maybe effect by bindProps, so use it here.
     */
    others.className = others.className ? others.className + " ui" : "ui";
  }
  return createElement(
    component,
    others,
    getChildren(renderChildren, children)
  );
};

export default SemanticUI;
