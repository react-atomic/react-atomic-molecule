import Transform from "./HamburgerTransform";

const HamburgerToX = (props) => {
  const nextProps = {
    line: {
      transition: [
        "transform 300ms cubic-bezier(.4,0,.2,1), visibility 0s linear 150ms",
      ],
    },
    line1: {
      transform: ["rotate(45deg) translateX(4.5px) translateY(-6px)"],
    },
    line2: {
      visibility: "hidden",
    },
    line3: {
      transform: ["rotate(-45deg) translateX(-13px) translateY(-1px)"],
    },
    ...props,
  };
  return Transform(nextProps);
};

export default HamburgerToX;
