//@ts-check

import * as React from "react";
const { useRef } = React;
import needCSS from "need-css";

/**
 * @param {string[]} mods
 * @param {string} groupKey
 */
const useCSS = (mods, groupKey) => {
  /**
   * @type {React.Ref<boolean | undefined>}
   */
  const injects = useRef(null);
  if (!injects.current) {
    injects.current = true;
    needCSS(mods, groupKey);
  }
};

export default useCSS;
