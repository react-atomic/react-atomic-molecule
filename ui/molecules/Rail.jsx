import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Rail = (props) => {
  const { attached = true, left = true, ...others } = props;
  const classes = mixClass(props.className, "rail", {
    left,
    attached,
  });
  return <SemanticUI {...others} className={classes} />;
};

export default Rail;
