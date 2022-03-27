import SemanticUI from "./SemanticUI";

const Svg = ({
  ui = false,
  viewBox = "0 0 24 24",
  atom = "svg",
  width = "100%",
  ...props
}) => (
  <SemanticUI ui={ui} viewBox={viewBox} atom={atom} width={width} {...props} />
);

export default Svg;
