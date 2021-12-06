import { useEffect, useRef } from "react";
import lazyInject from "./lazyInject";

const useLazyInject = (InjectStyles, injectStore) => {
  const injects = useRef();
  if (!injects.current) {
    if (!injectStore) {
      injectStore = lazyInject(injects.current, InjectStyles);
    }
    injects.current = injectStore;
  }
  return injects.current;
};

export default useLazyInject;
