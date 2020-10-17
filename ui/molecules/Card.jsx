import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Card = (props) => {
  const classes = mixClass(props.className, "card");
  return <SemanticUI {...props} className={classes} />;
};

export default Card;
