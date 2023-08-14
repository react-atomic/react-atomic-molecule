// @ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Card = (props) => {
  const classes = mixClass(props.className, "card");
  return (
    <SemanticUI
      {...props}
      cssList={[
        {
          cssModule: ["card"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
    />
  );
};

export default Card;
