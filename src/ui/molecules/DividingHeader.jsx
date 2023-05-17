// @ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../hooks/useCSS";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const DividingHeader = (props) => {
  useCSS(["divider", "header"], "semantic");
  const classes = mixClass(props.className, "dividing header");
  return <SemanticUI {...props} className={classes} />;
};

export default DividingHeader;
