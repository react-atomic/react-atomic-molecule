import React from "react";
import { mixClass } from "class-lib";
import callfunc from "call-func";
import SemanticUI from "../molecules/SemanticUI";

const Unsafe = ({ className, children, ...others }) => (
  <SemanticUI
    {...others}
    className={mixClass("us-html", className)}
    dangerouslySetInnerHTML={{
      __html: callfunc(children),
    }}
  />
);

export default Unsafe;
