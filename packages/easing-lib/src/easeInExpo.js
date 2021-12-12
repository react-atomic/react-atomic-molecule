const easeInExpo = (t, b, c, d) => {
  return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};

export default easeInExpo;
