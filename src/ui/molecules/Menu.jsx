import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../useCSS";

const Menu = (props) => {
  useCSS(["menu"], "semantic");
  const classes = mixClass(props.className, "menu");
  return <SemanticUI {...props} className={classes} />;
};

export default Menu;
