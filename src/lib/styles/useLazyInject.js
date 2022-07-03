import { useRef, useEffect } from "react";
import lazyInject from "./lazyInject";
import injectStyle from "./injectStyle";
import cleanStyleTag from "./cleanStyleTag";

const useLazyInject = (InjectStyles, existsInjection) => {
  const injects = useRef();
  const resetInject = () => {
    if (!injects.current) {
      if (!existsInjection) {
        existsInjection = lazyInject(InjectStyles, existsInjection);
      }
      injects.current = existsInjection;
    }
  };
  resetInject();
  useEffect(() => {
    if (!injects.current) {
      resetInject();
    }
    injectStyle(injects.current);
    return () => {
      cleanStyleTag(injects.current);
    };
  }, []);
  return injects.current;
};

export default useLazyInject;
