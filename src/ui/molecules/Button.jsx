// @ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import Icon from "../molecules/Icon";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Button = (props) => {
  const {
    type = "button",
    className,
    children,
    icon,
    style,
    ...restProps
  } = props;
  const classes = mixClass(className, "button");
  let thisIcon;
  let buttonWithIconStyle;
  if (icon) {
    thisIcon = <Icon style={Styles.icon}>{icon}</Icon>;
    buttonWithIconStyle = Styles.buttonWithIcon;
  }
  return (
    <SemanticUI
      atom="button"
      type={type}
      {...restProps}
      cssList={[
        {
          cssModule: ["button", "loader"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
      style={{
        ...buttonWithIconStyle,
        ...style,
      }}
    >
      {thisIcon}
      {children}
    </SemanticUI>
  );
};

export default Button;

const Styles = {
  icon: {
    left: 20,
    top: 7,
    fill: "#fff",
    position: "absolute",
  },
  buttonWithIcon: {
    position: "relative",
    paddingLeft: 44,
  },
};
