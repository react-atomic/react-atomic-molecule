import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Image = (props) => {
  const { imgProps, ...otherProps } = props;
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
Image.defaultProps = { ui: true, imgProps: { loading: "lazy" } };
export default Image;
