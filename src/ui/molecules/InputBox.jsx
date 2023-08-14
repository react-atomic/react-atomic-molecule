// @ts-check

import * as React from "react";
import { mixClass } from "class-lib";
import build from "reshow-build";
import SemanticUI from "../molecules/SemanticUI";
import Button from "../molecules/Button";
import Label from "../molecules/Label";
import Icon from "../molecules/Icon";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const InputBox = (props) => {
  const {
    atom = "input",
    actionProps = {},
    inputComponent = SemanticUI,
    button,
    icon,
    children,
    messageType,
    leftLabel,
    leftLabelProps,
    rightLabel,
    rightLabelProps,
    transparent,
    wrapStyle,
    wrapClassName,
    ...restProps
  } = props;
  const classes = mixClass(wrapClassName, messageType, "input", {
    labeled: leftLabel || rightLabel,
    right: rightLabel,
    action: button && !icon,
    icon,
    transparent,
  });
  let thisLeftLabel;
  if (leftLabel) {
    thisLeftLabel = (
      <Label style={Styles.label} {...leftLabelProps}>
        {leftLabel}
      </Label>
    );
  }
  let thisRightLabel;
  if (rightLabel) {
    thisRightLabel = (
      <Label
        style={{
          ...Styles.label,
          ...Styles.rightLabel,
        }}
        className="basic"
        {...rightLabelProps}
      >
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
  let thisChildren;
  let inputChildren;
  if ("select" === atom) {
    inputChildren = children;
    thisChildren = null;
  } else {
    thisChildren = children;
  }
  return (
    <SemanticUI
      cssList={[
        {
          cssModule: ["input", "search", "form"],
          cssGroup: "semantic",
        },
      ]}
      className={classes}
      style={wrapStyle}
    >
      {thisLeftLabel}
      {build(inputComponent)(
        {
          atom,
          ui: false,
          ...restProps,
        },
        inputChildren
      )}
      {thisRightLabel}
      {thisChildren}
      {thisButton}
    </SemanticUI>
  );
};

export default InputBox;

const Styles = {
  label: {
    background: "transparent",
    color: "inherit",
  },
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
