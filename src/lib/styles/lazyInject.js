import reactStyle from "./index";
import injectStyle from "./injectStyle";

const isArray = Array.isArray;
const keys = Object.keys;

const lazyInject = (injects, configs) => {
  if (!injects) {
    injects = {};
    keys(configs).forEach((key) => {
      let item = configs[key];
      if (!isArray(item)) {
        item = [item];
      }
      injects[key] = reactStyle.apply(null, item);
    });
  }
  injectStyle();
  return injects;
};

export default lazyInject;
