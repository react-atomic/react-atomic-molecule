// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import { T_UNDEFINED } from "reshow-constant";
import SemanticUI from "../molecules/SemanticUI";
import Label from "../molecules/Label";
import reactStyle from "../../lib/styles/index";
import useCSS from "../../hooks/useCSS";

/**
 * @param {{className?: string, [key: string]: any}} props
 */
const Progress = (props) => {
  useCSS(["progress"], "semantic");
  const {
    label,
    labelProps,
    barLabel,
    barLabelProps,
    barProps,
    children,
    className,
    percent,
    style,
    styles,
    ...others
  } = props;
  const thisLabel = label ? (
    <Label ui={false} {...labelProps}>
      {label}
    </Label>
  ) : (
    children
  );
  const {
    style: barStyle,
    styles: barStyles,
    ...otherBarProps
  } = barProps || {};
  const classes = mixClass(className, "progress");
  otherBarProps.children = barLabel ? (
    <SemanticUI className="progress" ui={false} {...barLabelProps}>
      {barLabel}
    </SemanticUI>
  ) : (
    otherBarProps.children
  );

  const thisPercent = (percent ?? props["data-percent"]) * 1;

  return (
    <SemanticUI
      {...others}
      className={classes}
      data-percent={thisPercent}
      styles={[reactStyle(style, T_UNDEFINED, false), styles]}
    >
      <SemanticUI
        className="bar"
        ui={false}
        {...otherBarProps}
        styles={[
          reactStyle(
            {
              width: thisPercent + "%",
              ...barStyle,
            },
            T_UNDEFINED,
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
