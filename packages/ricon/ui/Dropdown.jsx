import React from "react";
import Svg from "./Svg";
import Path from "./Path";

const ArrowPath = ({ size = 5, ...props }) => (
  <Path
    d={`M${Math.ceil((24 - size * 2) / 2)} ${Math.ceil((24 - size) / 2)}l${size} ${size} ${size}-${size}z`}
    {...props}
  />
);

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

export { ArrowPath };
export default Dropdown;
