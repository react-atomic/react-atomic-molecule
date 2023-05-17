// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import build from "reshow-build";
import SemanticUI from "../molecules/SemanticUI";
import useCSS from "../../hooks/useCSS";

/**
 * @param {{
 *   component?: React.ReactNode,
 *   loading?: string,
 *   src?: string,
 *   imgProps?: any,
 *   prepend?: React.ReactNode | React.ReactNode[],
 *   className?: string,
 *   alt?: string,
 *   title?: string,
 *   atom?: string,
 *   children?: React.ReactNode | React.ReactNode[],
 *   [key: string]: any
 * }} props
 */
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
  const { alt, title, atom, children } = restProps;
  const classes = mixClass(props.className, {
    image: props.ui,
  });
  const thisAlt = alt || title;
  const thisImgProps = {
    ...imgProps,
    atom: "img",
    alt: thisAlt,
    key: src,
    src,
    loading,
  };

  if (atom && "img" !== atom) {
    return build(component)(
      {
        ...restProps,
        className: classes,
      },
      <>
        {prepend}
        <SemanticUI {...thisImgProps} />
        {children}
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
