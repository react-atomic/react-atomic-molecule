import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../src/useCSS";

const Image = (props) => {
  useCSS(["image"], "semantic");
  const { loading = "lazy", src, imgProps, ...restProps } = props;
  const classes = mixClass(props.className, {
    image: props.ui,
  });
  const thisAlt = props.alt || props.title;
  const thisImgProps = {
    ...imgProps,
    atom: "img",
    alt: thisAlt,
    key: src,
    src,
    loading,
  };

  if (props.atom && "img" !== props.atom) {
    return (
      <SemanticUI {...restProps} className={classes}>
        <SemanticUI {...thisImgProps} />
        {props.children}
      </SemanticUI>
    );
  } else {
    return (
      <SemanticUI {...{ ...restProps, ...thisImgProps }} className={classes} />
    );
  }
};
export default Image;
