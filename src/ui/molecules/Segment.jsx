import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../useCSS";

const Segment = (props) => {
  useCSS(["loader", "segment"], "semantic");
  const classes = mixClass(props.className, "segment");
  return <SemanticUI {...props} className={classes} />;
};

export default Segment;
