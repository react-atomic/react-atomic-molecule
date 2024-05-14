// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import build from "reshow-build";
import SemanticUI from "../molecules/SemanticUI";

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
    src,
    loading,
  };
  restProps.className = classes;
  restProps.cssList = [
    {
      cssModule: ["image"],
      cssGroup: "semantic",
    },
  ];

  if (atom && "img" !== atom) {
    return build(component)(
      restProps,
      <>
        {prepend}
        <SemanticUI {...thisImgProps} key={src} />
        {children}
      </>
    );
  } else {
    return build(component)({
      ...restProps,
      ...thisImgProps,
      key: src,
    });
  }
};
export default Image;
