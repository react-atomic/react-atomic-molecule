// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{
 *   className?: string,
 *   messageType?: "success"|"error"|"warning",
 *   style?: React.CSSProperties,
 *   [key: string]: any
 * }} props
 */
const Form = (props) => {
  const { messageType, style, className, ...restProps } = props;
  const classes = mixClass(className, messageType, "form");
  return (
    <SemanticUI
      atom="form"
      {...restProps}
      cssList={[
        {
          cssModule: ["form", "input", "loader", "search"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
      style={{ ...Styles.form, ...style }}
    />
  );
};
export default Form;

const Styles = {
  /**
   * @type {React.CSSProperties}
   */
  form: {
    boxSizing: "border-box",
  },
};
