// @ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Label = (props) => {
  const classes = mixClass(props.className, "label");
  return (
    <SemanticUI
      {...props}
      cssList={[
        {
          cssModule: ["label"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
    />
  );
};

export default Label;
