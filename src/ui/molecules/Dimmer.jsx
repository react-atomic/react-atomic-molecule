// @ts-check
import * as React from "react";
import { mixClass } from "class-lib";
import Content from "../molecules/Content";
import SemanticUI from "../molecules/SemanticUI";

/**
 * @param {{
 * className?: string,
 * show?: boolean,
 * isModal?: boolean,
 * center?: boolean,
 * content?: boolean,
 * children?: React.ReactNode,
 * contentStyle?: React.CSSProperties,
 * [key: string]: any
 * }} props
 */
const Dimmer = (props) => {
  const {
    show = false,
    isModal = false,
    /**
     *  "center' and "content" are the same,  just let user not confuse.
     *  So if you set any of it to false, will not show content.
     */
    center = true,
    content = true,
    className,
    children,
    contentStyle,
    ...restProps
  } = props;
  if (!show) {
    return null;
  }
  let classes = mixClass(className, "transition visible active", {
    dimmer: !isModal,
    modal: isModal,
  });

  let child;
  if (center && content) {
    child = (
      <Content style={{ boxSizing: "inherit", ...contentStyle }}>
        {children}
      </Content>
    );
  } else {
    child = children;
  }
  return (
    <SemanticUI
      {...restProps}
      cssList={[{ cssModule: ["dimmer"], cssGroup: "semantic" }]}
      className={classes}
    >
      {child}
    </SemanticUI>
  );
};

export default Dimmer;
