// @ts-check

import * as React from "react";
const { Children, cloneElement } = React;
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {React.ReactElement} children
 * @param {string} pAtom
 * @param {boolean} horizontal
 * @returns {any[]}
 */
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

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const List = (props) => {
  /**
   * Why need type?
   *
   * List not the only type, such as segments.
   * https://semantic-ui.com/elements/segment.html#raised-segments
   *
   */
  const { type = "list", className, children, horizontal, ...restProps } = props;

  const atom = props.atom;
  const classes = mixClass(className, type, { horizontal });
  /**
   * @type {any}
   */
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
    <SemanticUI
      {...restProps}
      cssList={[{ cssModule: ["list"], cssGroup: "semantic" }]}
      className={classes}
    >
      {child}
    </SemanticUI>
  );
};

export default List;
