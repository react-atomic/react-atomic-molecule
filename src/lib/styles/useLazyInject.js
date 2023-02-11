//@ts-check

import { useRef, useEffect, useState } from "react";
import { NEW_OBJ, OBJ_SIZE } from "reshow-constant";
import lazyInject from "./lazyInject";
import injectStyle from "./injectStyle";
import cleanStyleTag from "./cleanStyleTag";
import genStyleId from "./genStyleId";

/**
 * @param {object} InjectStyles
 * @param {object} existsInjection
 * @returns {object}
 */
const useLazyInject = (InjectStyles, existsInjection) => {
  const [oid] = useState(() => genStyleId("o"));
  const injects = useRef();
  const injectMounted = useRef(NEW_OBJ());
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
    if (!OBJ_SIZE(injects.current)) {
      resetInject();
    }
    if (!OBJ_SIZE(injectMounted.current)) {
      injectStyle(injects.current);
    }
    injectMounted.current[oid] = true;
    return () => {
      delete injectMounted.current[oid];
      if (!OBJ_SIZE(injectMounted.current)) {
        cleanStyleTag(injects.current);
      }
    };
  }, []);
  return injects.current;
};

export default useLazyInject;
