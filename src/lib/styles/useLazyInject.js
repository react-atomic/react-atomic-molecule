import { useEffect, useRef } from "react";
import lazyInject from "./lazyInject";

const useLazyInject = (InjectStyles) => {
  const injects = useRef();
  if (!injects.current) {
    injects.current = lazyInject(injects.current, InjectStyles);
  }
  return injects.current;
};

export default useLazyInject;
