// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Item = (props) => {
  const classes = mixClass(props.className, "item");
  return (
    <SemanticUI
      {...props}
      cssList={[{ cssModule: ["item", "list"], cssGroup: "semantic" }]}
      className={classes}
    />
  );
};

export default Item;
