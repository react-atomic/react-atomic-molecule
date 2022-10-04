import { KEYS } from "reshow-constant";
import mergeDefaultValue from "../../mergeDefaultValue";

/**
 * @param {object} styles
 * @param {object} defaultStyles
 * @param {object} injectStyles
 */
const mergeStyleConfig = (styles, defaultStyles, injectStyles) => {
  if (defaultStyles) {
    mergeDefaultValue(styles, defaultStyles);
  }
  if (injectStyles) {
    KEYS(styles).forEach((key) => {
      if (injectStyles[key]) {
        injectStyles[key][0] = {
          ...injectStyles[key][0],
          ...styles[key],
        };
      }
    });
  }
};

export default mergeStyleConfig;
