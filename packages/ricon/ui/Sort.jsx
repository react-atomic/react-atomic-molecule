import Svg from "./Svg";
import ArrowPath from "./ArrowPath";

const Sort = (props) => (
  <Svg {...props}>
    <ArrowPath transform="rotate(180,12,9) translate(0,-3)" />
    <ArrowPath transform="translate(0,3)" />
  </Svg>
);

export default Sort;
