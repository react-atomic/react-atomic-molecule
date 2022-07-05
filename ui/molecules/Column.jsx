import { mixClass } from "class-lib";
import build from "reshow-build";
import SemanticUI from "../molecules/SemanticUI";

const Column = ({
  component = SemanticUI,
  ui = false,
  className,
  ...restProps
}) => {
  const classes = mixClass(className || "pure-u-1", "column");
  return build(component)({
    ...restProps,
    ui,
    className: classes,
  });
};

export default Column;
