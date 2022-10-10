const aniName = "flip";
const css = {
  [aniName]: [
    [
      {
        transform:
          "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
        animationTimingFunction: "ease-out",
      },
      {
        transform:
          "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
        animationTimingFunction: "ease-out",
      },
      {
        transform:
          "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
        animationTimingFunction: "ease-in",
      },
    ],
    [`@keyframes ${aniName}`, "0%", "50%", "100%"],
  ],
};
export default css;
export { aniName };
