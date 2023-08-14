// @ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Divider = (props) => {
  const classes = mixClass(props.className, "divider");

  return (
    <SemanticUI
      {...props}
      cssList={[{ cssModule: ["divider"], cssGroup: "semantic" }]}
      className={classes}
    />
  );
};

export default Divider;
