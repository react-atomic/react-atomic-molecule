import { HAS, FUNCTION } from "reshow-constant";

const assignEl = (el, refCb) => {
  if (HAS(refCb, "current")) {
    refCb.current = el;
  } else if (FUNCTION === typeof refCb) {
    refCb(el);
  }
};

const mergeRef = (el, current, props) => {
  const { refCb } = props || {};
  if (refCb) {
    assignEl(el, refCb);
  }
  if (current) {
    assignEl(el, current);
  }
};

export default mergeRef;
