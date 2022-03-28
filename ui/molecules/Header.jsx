import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../src/useCSS";

const Header = (props) => {
  useCSS(["header"], "semantic");
  const classes = mixClass(props.className, "header");
  return <SemanticUI {...props} className={classes} />;
};

export default Header;
