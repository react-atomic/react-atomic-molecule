import { isUnitlessNumber } from "./cssUnitLessNumber";
import { IS_ARRAY, NUMBER } from "reshow-constant";

const appendPx = (v) => (v && NUMBER === typeof v ? v + "px" : v);

const cssNumberToUnit = (key, value) => {
  if (isUnitlessNumber[key]) {
    return value;
  }
  return IS_ARRAY(value) ? value.map((v) => appendPx(v)) : appendPx(value);
};

export default cssNumberToUnit;
