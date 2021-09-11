import { IS_ARRAY, KEYS } from "reshow-constant";
import reactStyle from "./index";
import injectStyle from "./injectStyle";

const lazyInject = (injects, configs) => {
  if (!injects) {
    injects = {};
    KEYS(configs).forEach((key) => {
      let item = configs[key];
      if (!IS_ARRAY(item)) {
        item = [item];
      }
      injects[key] = reactStyle.apply(null, item);
    });
  }
  injectStyle();
  return injects;
};

export default lazyInject;
