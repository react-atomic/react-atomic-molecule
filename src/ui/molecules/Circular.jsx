// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../hooks/useCSS";

/**
 * @see https://semantic-ui.com/elements/image.html#circular
 * @see https://semantic-ui.com/elements/label.html#circular
 * @param {{className?: string, [key: string]: any}} props
 */
const Circular = (props) => {
  useCSS(["label", "image"], "semantic");
  const classes = mixClass(props.className, "circular");
  return <SemanticUI {...props} className={classes} />;
};

export default Circular;
