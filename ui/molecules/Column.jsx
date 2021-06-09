import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Column = (props) => {
  const classes = mixClass(props.className || 'pure-u-1', "column");
  return <SemanticUI ui={false} {...props} className={classes} />;
};

export default Column;
