import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Row = (props) => {
  const classes = mixClass(props.className, "row pure-g");
  return <SemanticUI ui={false} {...props} className={classes} />;
};

export default Row;
