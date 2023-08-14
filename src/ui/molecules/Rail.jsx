// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Rail = (props) => {
  const { attached = true, left = true, ...restProps } = props;
  const classes = mixClass(props.className, "rail", {
    left,
    attached,
  });
  return (
    <SemanticUI
      {...restProps}
      cssList={[
        {
          cssModule: ["rail"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
    />
  );
};

export default Rail;
