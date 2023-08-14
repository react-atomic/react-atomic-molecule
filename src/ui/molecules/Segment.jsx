// @ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Segment = (props) => {
  const classes = mixClass(props.className, "segment");
  return (
    <SemanticUI
      {...props}
      cssList={[
        {
          cssModule: ["loader", "segment"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
    />
  );
};

export default Segment;
