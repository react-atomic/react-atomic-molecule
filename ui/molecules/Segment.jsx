import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../src/useCSS";

const Segment = (props) => {
  useCSS(["segment"], "semantic");
  const classes = mixClass(props.className, "segment");
  return <SemanticUI {...props} className={classes} />;
};

export default Segment;
