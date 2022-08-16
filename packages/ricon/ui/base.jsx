import Svg from "./Svg";
import Path from "./Path";

const base = (displayName, d) => {
  const Element = ({ type = null, children, ...props }) => {
    const path = d[type] || d["_"] || d;
    return (
      <Svg {...props} data-name={displayName}>
        {path.map ? path.map((p) => <Path d={p} />) : <Path d={path} />}
        {children}
      </Svg>
    );
  };
  Element.displayName = displayName;
  return Element;
};

export default base;
