import Svg from "./Svg";
import ArrowPath from "./ArrowPath";

const Dropdown = ({ type, ...props }) => {
  let transform = null;
  switch (type) {
    case "up":
      transform = "rotate(180,12,13)";
      break;
    case "left":
      transform = "rotate(90,12,13)";
      break;
    case "right":
      transform = "rotate(270,12,13)";
      break;
  }
  return (
    <Svg {...props}>
      <ArrowPath transform={transform} />
    </Svg>
  );
};

export default Dropdown;
