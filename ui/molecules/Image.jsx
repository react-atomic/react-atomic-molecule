import { mixClass } from "class-lib";
import build from "reshow-build";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../src/useCSS";

const Image = (props) => {
  useCSS(["image"], "semantic");
  const {
    component = SemanticUI,
    loading = "lazy",
    src,
    imgProps,
    prepend,
    ...restProps
  } = props;
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
    return build(component)(
      {
        ...restProps,
        className: classes,
      },
      <>
        {prepend}
        <SemanticUI {...thisImgProps} />
        {props.children}
      </>
    );
  } else {
    return build(component)({
      ...restProps,
      ...thisImgProps,
      className: classes,
    });
  }
};
export default Image;
