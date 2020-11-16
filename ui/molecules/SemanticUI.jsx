import React, { createElement } from "react";
import * as Atoms from "react-atomic-atom";
import get from "get-object-value";
import ucfirst from "ucfirst";

import injectStyle from "../../src/lib/styles/injectStyle";
import bindStyles from "../../src/lib/styles/bindStyles";
import { bindChildKey } from "../../src/getChildMapping";
import { mixClass } from "class-lib";

const keys = Object.keys;

const getChildren = (render, children) => render && bindChildKey(children);

const SemanticUI = ({
  atom,
  children,
  renderChildren,
  styles,
  styleOrder,
  ui,
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
      component = get(Atoms, [ucfirst(atom || "")], () => Atoms.Div);
      break;
  }
  const { className, style } = others;
  // bindStyles need after inject
  let bindProps = {};
  if (styles) {
    // Need avoid props pass by ref !!important!!
    injectStyle();
    bindProps = bindStyles({
      className,
      style,
      styles,
      styleOrder,
    });
  }
  keys(bindProps).forEach((key) => (others[key] = bindProps[key]));
  if (ui) {
    // others.className maybe effect by bindProps, so use it here.
    others.className = mixClass(others.className, "ui");
  }
  return createElement(
    component,
    others,
    getChildren(renderChildren, children)
  );
};

SemanticUI.defaultProps = {
  ui: true,
  renderChildren: true,
};

export default SemanticUI;
