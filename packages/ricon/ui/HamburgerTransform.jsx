import reactStyle from "./reactStyle";
import HamburgerIcon from "./Hamburger";

const HamburgerTransform = ({
  on,
  right,
  line,
  line1,
  line2,
  line3,
  ...props
}) => {
  let styleLine1 = line;
  let styleLine2 = line;
  let styleLine3 = line;
  if (right) {
    props.transform = "translate(24, 24) rotate(180)";
  }
  if (on) {
    styleLine1 = {
      ...line,
      ...line1,
    };
    styleLine2 = {
      ...line,
      ...line2,
    };
    styleLine3 = {
      ...line,
      ...line3,
    };
  }
  return (
    <HamburgerIcon
      {...props}
      line1={reactStyle(styleLine1, false, false)}
      line2={reactStyle(styleLine2, false, false)}
      line3={reactStyle(styleLine3, false, false)}
    />
  );
};

export default HamburgerTransform;
