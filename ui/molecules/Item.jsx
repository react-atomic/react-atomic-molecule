/* jshint esnext: true */
import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Item = (props) => {
  const classes = mixClass(props.className, "item");
  return <SemanticUI {...props} className={classes} />;
};

export default Item;
