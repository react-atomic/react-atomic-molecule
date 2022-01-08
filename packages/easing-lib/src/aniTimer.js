import callfunc from "call-func";
import { win } from "win-doc";

const aniTimer = ({ isContinue, done, cancel }, duration) => {
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
      callfunc(isContinue, [duration]);
      callfunc(done);
    }
  };
  callfunc(win().requestAnimationFrame, [run]);
};

export default aniTimer;
