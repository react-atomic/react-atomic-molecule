const aniName = 'pulsate';
const css = {
  breath: [
    [
      {
        transform: ['scale(1)'],
      },
      {
        opacity: 0.7,
        transform: ['scale(.75)'],
      },
      {
        opacity: 0.9,
        transform: ['scale(1)'],
      },
    ],
    [`@keyframes ${aniName}`, '0%', '45%', '100%'],
  ],
};
export default css;
export {aniName};
