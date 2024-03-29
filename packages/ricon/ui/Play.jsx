import Svg from "./Svg";
import Path from "./Path";

const Play = ({ fgColor=null, bgColor=null, ...props }) => (
  <Svg {...props}>
    <Path
      d="M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zM10 7.5l6 4.5-6 4.5v-9z"
      opacity=".3"
      fill={bgColor}
    />
    <Path
      d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-2 3.5v9l6-4.5z"
      fill={fgColor}
    />
  </Svg>
);

export default Play;
