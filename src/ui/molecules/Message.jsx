import { mixClass } from "class-lib";
import Header from "../molecules/Header";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../useCSS";

const Message = (props) => {
  useCSS(["message"], "semantic");
  const { header, className, children, messageType, ...reset } = props;
  const classes = mixClass(
    className,
    {
      info: messageType === "info",
      error: messageType === "error",
      success: messageType === "success",
      warning: messageType === "warning",
    },
    "message"
  );
  let thisHeader;
  if (header) {
    thisHeader = <Header>{header}</Header>;
  }
  return (
    <SemanticUI {...reset} className={classes}>
      {thisHeader}
      {children}
    </SemanticUI>
  );
};
export default Message;
