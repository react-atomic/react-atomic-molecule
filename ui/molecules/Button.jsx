import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import Icon from "../molecules/Icon";

const Button = (props) => {
  const {
    type = "button",
    className,
    children,
    icon,
    style,
    ...others
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
      {...others}
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
    width: 25,
    height: 25,
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
