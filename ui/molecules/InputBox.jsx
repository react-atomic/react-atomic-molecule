import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import Button from "../molecules/Button";
import Label from "../molecules/Label";
import Icon from "../molecules/Icon";
import { useCSS } from "../../src/needCSS";
import useLazyInject from "../../src/lib/styles/useLazyInject";

const InputBox = (props) => {
  injects = useLazyInject(InjectStyles, injects);
  useCSS(["input", "search", "form"], "semantic");

  const {
    button = "Submit",
    actionProps = {},
    icon,
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
    thisButton = <Button {...actionProps}>{button}</Button>;
  } else if (icon) {
    thisButton = (
      <Icon {...actionProps} style={{ ...Styles.icon, ...actionProps.style }}>
        {icon}
      </Icon>
    );
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

export default InputBox;

const Styles = {
  rightLabel: {
    borderRadius: 0,
  },
  icon: {
    position: "absolute",
    top: 0,
    right: 0,
    opacity: 0.5,
  },
};

let injects;
const InjectStyles = {
  label: [
    {
      background: "transparent",
      color: "inherit",
    },
    ".ui.transparent.inverted.input>.label",
  ],
};
