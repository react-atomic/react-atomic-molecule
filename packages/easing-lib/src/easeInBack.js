//@ts-check

/**
 * @param {number} t Current time
 * @param {number} b Beginning value
 * @param {number} c Change in value
 * @param {number} d Duration
 * @param {number=} s Overshoot amount, default 1.70158
 * @returns {number}
 */
const easeInBack = (t, b, c, d, s) => {
  if (s == null) {
    s = 1.70158;
  }
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};

export default easeInBack;
