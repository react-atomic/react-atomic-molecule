//@ts-check

import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Icon = ({ className, style, ...others }) => (
  <SemanticUI
    atom="i"
    ui={false}
    {...others}
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
