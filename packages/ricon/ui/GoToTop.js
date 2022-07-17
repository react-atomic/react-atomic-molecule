import Icon from "./Download";

const GoToTop = ({ style, ...props }) => (
  <Icon
    {...props}
    type="file"
    style={{ ...style, transform: "rotate(180deg)" }}
  />
);

export default GoToTop;
