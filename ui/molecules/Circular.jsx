import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../src/useCSS";

/**
 * https://semantic-ui.com/elements/image.html#circular
 * https://semantic-ui.com/elements/label.html#circular
 */

const Circular = (props) => {
  useCSS(["label", "image"], "semantic");
  const classes = mixClass(props.className, "circular");
  return <SemanticUI {...props} className={classes} />;
};

export default Circular;
