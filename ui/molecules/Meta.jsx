import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Meta = (props) => {
  const classes = mixClass(props.className, "meta");
  return <SemanticUI {...props} ui={false} className={classes} />;
};

export default Meta;
