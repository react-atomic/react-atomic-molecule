//@ts-check

/**
 * @param {number} t Current time
 * @param {number} b Beginning value
 * @param {number} c Change in value
 * @param {number} d Duration
 * @returns {number}
 */
const easeInExpo = (t, b, c, d) => {
  return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};

export default easeInExpo;
