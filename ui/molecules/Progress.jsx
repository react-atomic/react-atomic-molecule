import React from "react";
import reactStyle from "../../src/lib/styles/index";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import Label from "../molecules/Label";

const Progress = (props) => {
  const {
    label,
    barLabel,
    barProps,
    children,
    className,
    percent,
    style,
    styles,
    ...others
  } = props;
  const thisLabel = label ? <Label ui={false}>{label}</Label> : children;
  const {
    style: barStyle,
    styles: barStyles,
    ...otherBarProps
  } = barProps || {};
  const classes = mixClass(className, "progress");
  otherBarProps.children = barLabel ? (
    <SemanticUI className="progress">{barLabel}</SemanticUI>
  ) : (
    otherBarProps.children
  );

  return (
    <SemanticUI
      {...others}
      className={classes}
      styles={[reactStyle(style, null, false), styles]}
    >
      <SemanticUI
        className="bar"
        ui={false}
        {...otherBarProps}
        styles={[
          reactStyle(
            {
              width: percent + "%",
              ...barStyle,
            },
            null,
            false
          ),
          barStyles,
        ]}
      />
      {thisLabel}
    </SemanticUI>
  );
};

export default Progress;
