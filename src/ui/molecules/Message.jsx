// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import Header from "../molecules/Header";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Message = (props) => {
  const { header, className, children, messageType, ...restProps } = props;
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
    <SemanticUI
      {...restProps}
      cssList={[{ cssModule: ["message"], cssGroup: "semantic" }]}
      className={classes}
    >
      {thisHeader}
      {children}
    </SemanticUI>
  );
};
export default Message;
