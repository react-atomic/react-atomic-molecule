// @ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const DividingHeader = (props) => {
  const classes = mixClass(props.className, "dividing header");
  return (
    <SemanticUI
      {...props}
      cssList={[
        {
          cssModule: ["divider", "header"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
    />
  );
};

export default DividingHeader;
