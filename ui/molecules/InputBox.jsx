/* jshint esnext: true */
import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import Button from "../molecules/Button";
import Label from "../molecules/Label";
import Icon from "../molecules/Icon";

const InputBox = (props) => {
  const {
    icon,
    button,
    buttonProps,
    className,
    children,
    messageType,
    leftLabel,
    leftLabelProps,
    rightLabel,
    rightLabelProps,
    style,
    transparent,
    inputStyle,
    ...others
  } = props;
  const classes = mixClass(className, messageType, "input", {
    labeled: leftLabel || rightLabel,
    right: rightLabel,
    action: button && !icon,
    icon,
    transparent,
  });
  let thisLeftLabel;
  if (leftLabel) {
    thisLeftLabel = <Label {...leftLabelProps}>{leftLabel}</Label>;
  }
  let thisRightLabel;
  if (rightLabel) {
    thisRightLabel = (
      <Label style={Styles.rightLabel} className="basic" {...rightLabelProps}>
        {rightLabel}
      </Label>
    );
  }
  let thisButton = null;
  if (button) {
    thisButton = <Button {...buttonProps}>{button}</Button>;
  }
  if (icon) {
    thisButton = <Icon style={Styles.icon}>{icon}</Icon>;
  }
  return (
    <SemanticUI className={classes} style={style}>
      {thisLeftLabel}
      <SemanticUI atom="input" {...others} style={inputStyle} ui={false} />
      {thisRightLabel}
      {children}
      {thisButton}
    </SemanticUI>
  );
};

InputBox.defaultProps = {
  button: "Submit",
};

export default InputBox;

const Styles = {
  rightLabel: {
    borderRadius: 0,
  },
  icon: {
    width: "1.1em",
    position: "absolute",
    top: 0,
    right: 0,
    opacity: 0.5,
  },
};
