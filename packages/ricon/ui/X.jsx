import SemanticUI from "./SemanticUI";
import useLazyInject from "./useLazyInject";
import mixClass from "./mixClass";

const ICON_X = ({
  position = "absolute",
  weight = ".2rem",
  size = "1rem",
  color = "#333",
  className,
  style,
  ...props
}) => {
  injects = useLazyInject(InjectStyles, injects);
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
      {...props}
      className={classes}
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

export default ICON_X;

const Styles = {
  container: {
    background: "transparent",
    position: "relative",
    cursor: "pointer",
  },
  absolute: {
    position: "absolute",
    top: 5,
    right: 5,
  },
};

let injects;
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
