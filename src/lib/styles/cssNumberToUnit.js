import { isUnitlessNumber } from "./cssUnitLessNumber";
import { IS_ARRAY } from "reshow-constant";

const appendPx = (v) => ("number" === typeof v ? v + "px" : v);

const cssNumberToUnit = (key, value) => {
  if (isUnitlessNumber[key]) {
    return value;
  }
  return IS_ARRAY(value) ? value.map((v) => appendPx(v)) : appendPx(value);
};

export default cssNumberToUnit;
