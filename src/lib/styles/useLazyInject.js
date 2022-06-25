import { useRef, useEffect } from "react";
import lazyInject from "./lazyInject";
import injectStyle from "./injectStyle";
import cleanStyleTag from "./cleanStyleTag";

const useLazyInject = (InjectStyles, existsInjection) => {
  const injects = useRef();
  if (!injects.current) {
    if (!existsInjection) {
      existsInjection = lazyInject(InjectStyles, existsInjection);
    } else {
      injectStyle(existsInjection);
    }
    injects.current = existsInjection;
  }
  useEffect(() => {
    return () => {
      cleanStyleTag(injects.current);
      injects.current = null;
    };
  }, []);
  return injects.current;
};

export default useLazyInject;
