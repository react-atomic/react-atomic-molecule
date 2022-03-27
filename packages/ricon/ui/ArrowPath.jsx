import Path from "./Path";

const ArrowPath = ({ size = 5, ...props }) => (
  <Path
    d={`M${Math.ceil((24 - size * 2) / 2)} ${Math.ceil((24 - size) / 2)}l${size} ${size} ${size}-${size}z`}
    {...props}
  />
);

export default ArrowPath;
