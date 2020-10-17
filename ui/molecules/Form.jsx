/* jshint esnext: true */
import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Form = (props) => {
  const { messageType, className, ...others } = props;
  const classes = mixClass(className, messageType, "form");
  return <SemanticUI atom="form" {...others} className={classes} />;
};
export default Form;
