import { Children } from "react";
import build from "reshow-build";

const mergeChildren = (vDom, children, isAppend) => {
  const myDom = build(vDom)({ key: "merge" });
  if (isAppend) {
    return [...(Children.map(children, (c) => c) || []), myDom];
  } else {
    return [myDom, ...(Children.map(children, (c) => c) || [])];
  }
};

export default mergeChildren;
