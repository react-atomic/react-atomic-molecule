// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Header = (props) => {
  const classes = mixClass(props.className, "header");
  return (
    <SemanticUI
      {...props}
      cssList={[
        {
          cssModule: ["header"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
    />
  );
};

export default Header;
