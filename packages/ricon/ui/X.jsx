import React from "react";
import { useLazyInject, mixClass, SemanticUI } from "react-atomic-molecule";

let injects;

const ICON_X = (props) => {
  injects = useLazyInject(InjectStyles, injects);
  const { position, weight, size, className, color, style, ...others } = props;
  const classes = mixClass(className, "icon", "x");
  const lineStyle = {
    width: weight,
    height: size,
    background: color,
  };
  let containerStyle = Styles.container;
  if ("absolute" === position) {
    containerStyle = {
      ...containerStyle,
      ...Styles.absolute,
    };
  }
  return (
    <SemanticUI
      className={classes}
      {...others}
      style={{
        width: size,
        height: size,
        ...containerStyle,
        ...style,
      }}
    >
      <SemanticUI styles={injects.line} style={lineStyle}>
        <SemanticUI styles={injects.line2} style={lineStyle} />
      </SemanticUI>
    </SemanticUI>
  );
};
ICON_X.defaultProps = {
  style: {},
  size: "1rem",
  weight: ".2rem",
  color: "#333",
  position: "absolute",
};

export default ICON_X;

const Styles = {
  container: {
    background: "transparent",
    position: "relative",
    cursor: "pointer",
  },
  absolute: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
};

const InjectStyles = {
  line: [
    {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: ["translate(-50%,-50%) rotate(45deg)"],
    },
  ],
  line2: [
    {
      transform: ["rotate(90deg)"],
    },
  ],
};
