import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../useCSS";

const DividingHeader = (props) => {
  useCSS(["divider", "header"], "semantic");
  const classes = mixClass(props.className, "dividing header");
  return <SemanticUI {...props} className={classes} />;
};

export default DividingHeader;