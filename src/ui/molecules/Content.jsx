// @ts-check
import * as React from "react";

import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
/**
 * @param {{
 * className?: string,
 * style?: React.CSSProperties,
 * [key: string]: any
 * }} props
 */
const Content = ({ className, style, ...props }) => {
  const classes = mixClass(className, "content");
  return (
    <SemanticUI
      ui={false}
      {...props}
      className={classes}
      style={{ boxSizing: "inherit", ...style }}
    />
  );
};
export default Content;
