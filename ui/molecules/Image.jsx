import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";
import { useCSS } from "../../src/needCSS";

const Image = (props) => {
  useCSS(["image"], "semantic");
  const { imgProps = { loading: "lazy" }, ...otherProps } = props;
  const classes = mixClass(props.className, {
    image: props.ui,
  });
  const thisAlt = props.alt || props.title;

  if (props.atom && "img" !== props.atom) {
    return (
      <SemanticUI {...otherProps} className={classes}>
        <SemanticUI atom="img" src={props.src} alt={thisAlt} {...imgProps} />
        {props.children}
      </SemanticUI>
    );
  } else {
    return (
      <SemanticUI
        atom="img"
        {...{ ...otherProps, ...imgProps }}
        alt={thisAlt}
        className={classes}
      />
    );
  }
};
export default Image;
