import Svg from "./Svg";
import G from "./G";
import Circle from "./Circle";
import useLazyInject from "./useLazyInject";

const CircleAni = ({ rotate, delay, ...props }) => {
  if (rotate) {
    rotate = ` rotate(${rotate} 0 13)`;
  } else {
    rotate = "";
  }
  const circleStyle = {};
  if (delay) {
    circleStyle.animationDelay = delay + "s";
  }
  return (
    <G transform={`translate(16, 3)${rotate}`}>
      <Circle r="3" style={circleStyle} styles={injects.loading} />
    </G>
  );
};

const CircleLoading = ({viewBox="0 0 32 32", ...props}) => {
  injects = useLazyInject(InjectStyles, injects);
  return (
    <Svg {...props} viewBox={viewBox}>
      <CircleAni />
      <CircleAni rotate={45} delay={0.125} />
      <CircleAni rotate={90} delay={0.25} />
      <CircleAni rotate={135} delay={0.375} />
      <CircleAni rotate={180} delay={0.5} />
      <CircleAni rotate={225} delay={0.625} />
      <CircleAni rotate={270} delay={0.75} />
      <CircleAni rotate={315} delay={0.875} />
    </Svg>
  );
};

export default CircleLoading;

let injects;
const InjectStyles = {
  loading: [
    {
      animation: ["scale-ani 1s infinite linear"],
    },
  ],
  scaleAni: [
    [
      {
        transform: ["scale(1)"],
      },
      {
        transform: ["scale(0)"],
      },
    ],
    ["@keyframes scale-ani", "0%", "100%"],
  ],
};
