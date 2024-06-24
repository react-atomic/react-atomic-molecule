import { KEYS, IS_ARRAY } from "reshow-constant";

const isObject = (val) =>
  val != null && typeof val === "object" && IS_ARRAY(val) === false;

const mergeDefaultValue = (obj, defaultValue) => {
  obj = obj || {};
  KEYS(defaultValue).forEach((key) => {
    obj[key] = isObject(defaultValue[key])
      ? {
          ...defaultValue[key],
          ...obj[key],
        }
      : null != obj[key]
        ? obj[key]
        : defaultValue[key];
  });

  return obj;
};

export default mergeDefaultValue;
