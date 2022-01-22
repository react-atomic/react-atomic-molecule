import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../src/useCSS";

const Form = (props) => {
  useCSS(["input", "search", "form"], "semantic");
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
