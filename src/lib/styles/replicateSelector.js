//@ts-check

/**
 * @param {string} s
 * @returns {string}
 */
const replicateSelector = (s) => {
  s = "." + s;
  const a = [s];
  for (let i = 1; i < 10; i++) {
    a[i] = a[i - 1] + s + i;
  }
  return a.join(",");
};

export default replicateSelector;
