import { useRef, useEffect, useState } from "react";
import { NEW_OBJ, OBJ_SIZE } from "reshow-constant";
import lazyInject from "./lazyInject";
import injectStyle from "./injectStyle";
import cleanStyleTag from "./cleanStyleTag";
import genStyleId from "./genStyleId";

const useLazyInject = (InjectStyles, existsInjection) => {
  const [oid] = useState(() => genStyleId("o"));
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
    if (!injects.current._mounted) {
      injectStyle(injects.current);
      injects.current._mounted = NEW_OBJ();
    }
    injects.current._mounted[oid] = true;
    return () => {
      delete injects.current._mounted[oid];
      if (!OBJ_SIZE(injects.current._mounted)) {
        delete injects.current._mounted;
        cleanStyleTag(injects.current);
      }
    };
  }, []);
  return injects.current;
};

export default useLazyInject;
