import React from "react";
import { mixClass } from "class-lib";
import SemanticUI from "../molecules/SemanticUI";

const Image = props => {
  const { alt, title, ui, imgProps } = props;
  const classes = mixClass(props.className, {
    image: ui
  });
  const thisAlt = alt || title;

  if (props.atom && "img" !== props.atom) {
    return (
      <SemanticUI {...props} className={classes}>
        <SemanticUI atom="img" src={props.src} alt={thisAlt} {...imgProps} />
        {props.children}
      </SemanticUI>
    );
  } else {
    return (
      <SemanticUI
        atom="img"
        {...{ ...props, ...imgProps }}
        alt={thisAlt}
        className={classes}
      />
    );
  }
};
Image.defaultProps = { ui: true, imgProps: { loading: "lazy" } };
export default Image;
