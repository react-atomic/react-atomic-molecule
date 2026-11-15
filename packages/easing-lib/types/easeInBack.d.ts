export default easeInBack;
/**
 * @param {number} t Current time
 * @param {number} b Beginning value
 * @param {number} c Change in value
 * @param {number} d Duration
 * @param {number=} s Overshoot amount, default 1.70158
 * @returns {number}
 */
declare function easeInBack(t: number, b: number, c: number, d: number, s?: number | undefined): number;
