import { Children } from "react";

const mergeChildren = (vDom, children, isAppend) => {
  if (isAppend) {
    return [...(Children.map(children, (c) => c) || []), vDom];
  } else {
    return [vDom, ...(Children.map(children, (c) => c) || [])];
  }
};

export default mergeChildren;
