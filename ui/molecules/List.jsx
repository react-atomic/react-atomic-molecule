import React, { Children, cloneElement } from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../src/useCSS";

const renderChildren = (children, pAtom, horizontal) =>
  Children.map(children, (child) => {
    if (!child) {
      return null;
    }
    if ("ul" === pAtom || "ol" === pAtom) {
      child = cloneElement(child, {
        atom: "li",
      });
    } else if ("table" === pAtom) {
      child = cloneElement(child, {
        atom: "td",
      });
      if (!horizontal) {
        child = <tr>{child}</tr>;
      }
    }
    return child;
  });

const List = (props) => {
  useCSS(["list"], "semantic");
  const { className, children, horizontal, ...others } = props;
  const atom = props.atom;
  const classes = mixClass(className, "list", { horizontal });
  let child = renderChildren(children, atom, horizontal);
  if (atom === "table") {
    if (child) {
      if (horizontal) {
        child = (
          <tbody>
            <tr>{child}</tr>
          </tbody>
        );
      } else {
        child = <tbody>{child}</tbody>;
      }
    }
  }
  return (
    <SemanticUI {...others} className={classes}>
      {child}
    </SemanticUI>
  );
};

export default List;
