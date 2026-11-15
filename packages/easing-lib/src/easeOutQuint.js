
//@ts-check

/**
 * @param {number} t Current time
 * @param {number} b Beginning value
 * @param {number} c Change in value
 * @param {number} d Duration
 * @returns {number}
 */
const easeOutQuint = (t, b, c, d) =>
    c * ((t = t / d - 1) * t * t * t * t + 1) + b

export default easeOutQuint;
