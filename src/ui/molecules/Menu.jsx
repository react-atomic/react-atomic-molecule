// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Menu = (props) => {
  const classes = mixClass(props.className, "menu");
  return (
    <SemanticUI
      {...props}
      cssList={[{ cssModule: ["menu"], cssGroup: "semantic" }]}
      className={classes}
    />
  );
};

export default Menu;
