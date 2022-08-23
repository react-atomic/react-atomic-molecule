import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../useCSS";

const Item = (props) => {
  useCSS(["item", "list"], "semantic");
  const classes = mixClass(props.className, "item");
  return <SemanticUI {...props} className={classes} />;
};

export default Item;
