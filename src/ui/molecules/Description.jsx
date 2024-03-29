import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Description = (props) => {
  const { children, className, lineAtom, ...restProps } = props;
  const classes = mixClass(className, "description");
  return (
    <SemanticUI {...restProps} ui={false} className={classes}>
      {children && children.map
        ? children.map((v, k) => (
            <SemanticUI atom={lineAtom} key={k}>
              {v}
            </SemanticUI>
          ))
        : children}
    </SemanticUI>
  );
};

export default Description;
