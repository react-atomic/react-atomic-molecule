import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../useCSS";

const Card = (props) => {
  useCSS(["card"], "semantic");
  const classes = mixClass(props.className, "card");
  return <SemanticUI {...props} className={classes} />;
};

export default Card;