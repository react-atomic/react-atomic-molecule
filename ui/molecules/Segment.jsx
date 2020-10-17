import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Segment = (props) => {
  const classes = mixClass(props.className, "segment");
  return <SemanticUI {...props} className={classes} />;
};

export default Segment;
