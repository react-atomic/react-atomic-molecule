import { HAS, FUNCTION } from "reshow-constant";

const assignEl = (el, refCb) => {
  if (HAS(refCb, "current")) {
    refCb.current = el;
  } else if (FUNCTION === typeof refCb) {
    refCb(el);
  }
};

const mergeRef = (el, refArr = []) =>
  refArr.forEach((ref) => ref && assignEl(el, ref));

export default mergeRef;
