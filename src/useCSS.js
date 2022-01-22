import { useEffect } from "react";
import needCSS from "need-css";

const useCSS = (mods, groupKey) => {
  useEffect(() => {
    needCSS(mods, groupKey);
  }, []);
};

export default useCSS;
