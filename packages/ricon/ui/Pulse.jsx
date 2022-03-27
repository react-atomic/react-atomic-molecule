import pulsate from "keyframe-css/pulsate";
import breath from "keyframe-css/breath";
import reactStyle from "./reactStyle";
import useLazyInject from "./useLazyInject";
import SemanticUI from "./SemanticUI";

const Pulse = ({ style, pointStyle, ringStyle }) => (
  <SemanticUI style={style}>
    <SemanticUI styles={[injects.pulsePoint, pointStyle]} />
    <SemanticUI styles={[injects.pulseRing, ringStyle]} />
  </SemanticUI>
);

const PulseIcon = ({
  pointColor = "rgba(5,80,255,0.9)",
  pointRotateX = 0,
  ringColor = "#89849b",
  animation = "pulsate",
  style,
}) => {
  injects = useLazyInject(InjectStyles, injects);
  const pointStyle = reactStyle(
    {
      background: pointColor,
      transform: ["translate(-50%,-50%) rotateX(" + pointRotateX + "deg)"],
    },
    false,
    false
  );

  const ringStyle = reactStyle(
    {
      boxShadow: ["0 0 1px 2px " + ringColor],
      animation: [animation + " 1s ease-out"],
      animationIterationCount: ["infinite"],
    },
    false,
    false
  );

  return (
    <Pulse
      style={{ ...Styles.pulse, ...style }}
      pointStyle={pointStyle}
      ringStyle={ringStyle}
    />
  );
};

export default PulseIcon;

const Styles = {
  pulse: {
    position: "relative",
    zIndex: 1,
    display: "inline-block",
    width: 40,
    height: 40,
  },
};

let injects;
const InjectStyles = {
  pulsePoint: [
    {
      borderRadius: ["50%"],
      height: 14,
      width: 14,
      position: "absolute",
      top: "50%",
      left: "50%",
    },
  ],
  pulseRing: [
    {
      borderRadius: ["50%"],
      height: "100%",
      opacity: 0,
      filter: "alpha(opacity=0)",
      msFilter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
    },
  ],
  pulsateKeyframe: pulsate.pulsate,
  breathKeyframe: breath.breath,
};
