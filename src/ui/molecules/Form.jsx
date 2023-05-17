// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../hooks/useCSS";

/**
 * @param {{
 *   className?: string,
 *   messageType?: "success"|"error"|"warning",
 *   style?: React.CSSProperties,
 *   [key: string]: any
 * }} props
 */
const Form = (props) => {
  useCSS(["form", "input", "loader", "search"], "semantic");
  const { messageType, style, className, ...others } = props;
  const classes = mixClass(className, messageType, "form");
  return (
    <SemanticUI
      atom="form"
      {...others}
      className={classes}
      style={{ ...Styles.form, ...style }}
    />
  );
};
export default Form;

const Styles = {
  form: {
    boxSizing: "border-box",
  },
};
