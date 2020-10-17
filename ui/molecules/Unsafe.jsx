import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Unsafe = ({ className, children, ...others }) => (
  <SemanticUI
    {...others}
    className={mixClass("us-html", className)}
    dangerouslySetInnerHTML={{
      __html: "function" === typeof children ? children() : children,
    }}
  />
);

export default Unsafe;
