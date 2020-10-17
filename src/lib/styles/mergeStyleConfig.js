const keys = Object.keys;

const mergeStyleConfig = (styles, defaultStyles, injectStyles) => {
  if (defaultStyles) {
    keys(defaultStyles).forEach(
      (key) =>
        (styles[key] = !styles[key]
          ? defaultStyles[key]
          : { ...defaultStyles[key], ...styles[key] })
    );
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
