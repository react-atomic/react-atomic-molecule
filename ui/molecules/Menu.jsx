import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Menu = (props) => {
  const classes = mixClass(props.className, "menu");
  return <SemanticUI {...props} className={classes} />;
};

export default Menu;
