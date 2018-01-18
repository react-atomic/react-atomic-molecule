
const easeOutQuint = (t, b, c, d) =>
    c * ((t = t / d - 1) * t * t * t * t + 1) + b

export default easeOutQuint;
