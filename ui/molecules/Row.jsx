import { mixClass } from "class-lib";
import build from "reshow-build";
import SemanticUI from "../molecules/SemanticUI";

const Row = ({
  component = SemanticUI,
  ui = false,
  className,
  ...restProps
}) => {
  const classes = mixClass(className, "row pure-g");
  return build(component)({
    ...restProps,
    ui,
    className: classes,
  });
};

export default Row;
