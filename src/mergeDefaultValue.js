import {} from "reshow-constant";

const keys = Object.keys;

const isArray = Array.isArray;
const isObject = (val) =>
  val != null && typeof val === "object" && isArray(val) === false;

const mergeDefaultValue = (obj, defaultValue) => {
  obj = obj || {};
  keys(defaultValue).forEach((key) => {
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
