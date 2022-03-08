import { useRef } from "react";
import lazyInject from "./lazyInject";

const useLazyInject = (InjectStyles, injectStore) => {
  const injects = useRef();
  if (!injects.current) {
    if (!injectStore) {
      injectStore = lazyInject(InjectStyles, injects.current);
    }
    injects.current = injectStore;
  }
  return injects.current;
};

export default useLazyInject;
