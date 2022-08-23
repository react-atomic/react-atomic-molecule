import { mixClass } from "class-lib";
import build from "reshow-build";
import SemanticUI from "../molecules/SemanticUI";

const Column = ({
  component = SemanticUI,
  pureUnitOne = true,
  ui = false,
  className,
  ...restProps
}) => {
  const classes = mixClass(className, "column", { "pure-u-1": pureUnitOne });
  return build(component)({
    ...restProps,
    ui,
    className: classes,
  });
};

export default Column;
