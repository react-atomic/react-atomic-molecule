//@ts-check

import { IS_ARRAY, KEYS, NEW_OBJ } from "reshow-constant";
import reactStyle from "./index";
import injectStyle from "./injectStyle";

/**
 * @param {object} configs
 * @param {object} injects
 * @returns {injects}
 */
const lazyInject = (configs, injects) => {
  if (!injects) {
    injects = NEW_OBJ();
    KEYS(configs).forEach((key) => {
      let item = configs[key];
      if (!IS_ARRAY(item)) {
        item = [item];
      }
      injects[key] = reactStyle.apply(null, item);
    });
    injectStyle();
  }
  return injects;
};

export default lazyInject;
