import callfunc from "call-func";
import { win } from "win-doc";

const EasingProcessor = ({ duration, isContinue, stop, cancel }) => {
  let beginTimeStamp;
  const run = (timestamp) => {
    beginTimeStamp = beginTimeStamp || timestamp;
    const elapsedTime = timestamp - beginTimeStamp;
    if (elapsedTime < duration) {
      if (callfunc(isContinue, [elapsedTime])) {
        callfunc(win().requestAnimationFrame, [run]);
      } else {
        callfunc(cancel);
      }
    } else {
      callfunc(stop);
    }
  };
  callfunc(win().requestAnimationFrame, [run]);
};

export default EasingProcessor;
