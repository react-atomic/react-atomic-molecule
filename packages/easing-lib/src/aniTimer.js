//@ts-check

import callfunc from "call-func";
import { win } from "win-doc";

/**
 * @typedef {object} AniTimerProps
 * @property {(elapsedTime: number) => boolean=} isContinue
 * Called every frame with the elapsed time. Return false to cancel.
 * @property {(duration: number) => void=} done
 * Called once when the animation is finished.
 * @property {() => void=} cancel
 * Called once when the animation is cancelled.
 */

/**
 * Run the callback with requestAnimationFrame until the duration is reached.
 *
 * @param {AniTimerProps} options
 * @param {number} duration
 * @returns {void}
 */
const aniTimer = ({ isContinue, done, cancel }, duration) => {
  /** @type {number|undefined} */
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
