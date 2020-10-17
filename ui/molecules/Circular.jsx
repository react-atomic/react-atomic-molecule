import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Circular = (props) => {
  const classes = mixClass(props.className, "circular");
  return <SemanticUI {...props} className={classes} />;
};

export default Circular;
