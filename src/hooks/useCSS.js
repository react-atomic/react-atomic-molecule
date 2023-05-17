//@ts-check
import { useRef } from "react";
import needCSS from "need-css";

const useCSS = (mods, groupKey) => {
  /**
   * @type {React.MutableRefObject<boolean | undefined>}
   */
  const injects = useRef();
  if (!injects.current) {
    injects.current = true;
    needCSS(mods, groupKey);
  }
};

export default useCSS;
