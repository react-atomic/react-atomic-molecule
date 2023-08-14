//@ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Icon = ({ className = "", style = {}, ...restProps }) => (
  <SemanticUI
    atom="i"
    ui={false}
    {...restProps}
    className={mixClass(className, "icon")}
    style={{
      display: "inline-block",
      verticalAlign: "inherit",
      width: 24,
      ...style,
    }}
  />
);

export default Icon;
