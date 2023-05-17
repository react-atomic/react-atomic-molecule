//@ts-check

import { useRef, useEffect, useState } from "react";
import { NEW_OBJ, OBJ_SIZE } from "reshow-constant";
import lazyInject from "../lib/styles/lazyInject";
import injectStyle from "../lib/styles/injectStyle";
import cleanStyleTag from "../lib/styles/cleanStyleTag";
import genStyleId from "../lib/styles/genStyleId";

/**
 * @param {object} InjectStyles
 * @param {object} existsInjection
 * @returns {object}
 */
const useLazyInject = (InjectStyles, existsInjection) => {
  const [oid] = useState(() => genStyleId("o"));
  /**
   * @type {any}
   */
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
