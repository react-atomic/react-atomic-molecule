import mergeDefaultValue from "../../mergeDefaultValue";
const keys = Object.keys;

const mergeStyleConfig = (styles, defaultStyles, injectStyles) => {
  if (defaultStyles) {
    mergeDefaultValue(styles, defaultStyles);
  }
  if (injectStyles) {
    keys(styles).forEach((key) => {
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
