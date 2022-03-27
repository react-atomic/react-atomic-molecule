import Svg from "./Svg";
import Path from "./Path";

const File = ({
  viewBox="0 0 26 26",
  background = "#e1e1e1",
  shadowColor = "#7f7f7f",
  labelBackground = "#000",
  labelColor = "#fff",
  children,
  ...props
}) => (
  <Svg viewBox={viewBox} {...props}>
    <Path
      d="m8 3.4c-1.1046 0-2 0.9-2 2v8 4 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-4-4l-6-6h-10z"
      fill={shadowColor}
    />
    <Path
      d="m8 2.4c-1.1046 0-2 0.9-2 2v8 4 6c0 1.1 0.8954 2 2 2h14c1.105 0 2-0.9 2-2v-6-4-4l-6-6h-10z"
      fill={background}
      stroke={shadowColor}
    />
    <Path d="m24 8.4-6-6v4c0 1.1 0.895 2 2 2h4z" fill={shadowColor} />
    <rect width="20" height="10.5" y="11" x="1" rx="1" fill={labelBackground} />
    <text
      fill={labelColor}
      style={Styles.label}
      transform="translate(10.5, 11)"
    >
      <tspan x="0" dy="1em" textAnchor="middle">
        {children}
      </tspan>
    </text>
  </Svg>
);

export default File;

const Styles = {
  label: {
    fontFamily: "PoiretOne-Regular, Poiret One",
    fontSize: 9,
  },
};
