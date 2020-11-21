import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Form = (props) => {
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
