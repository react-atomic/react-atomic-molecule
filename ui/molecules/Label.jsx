import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import { useCSS } from "../../src/needCSS";

const Label = (props) => {
  useCSS(["label"], "semantic");
  const classes = mixClass(props.className, "label");
  return <SemanticUI {...props} className={classes} />;
};

export default Label;
