const easeInBack = (t, b, c, d, s) => {
  if (s == null) {
    s = 1.70158;
  }
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};

export default easeInBack;
