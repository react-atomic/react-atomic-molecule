const aniName = 'pulsate';
const css = {
  pulsate: [
    [
      {
        transform: ['scale(0.1, 0.1)'],
        opacity: 0,
        filter: 'alpha(opacity=0)',
        msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)',
      },
      {
        opacity: 1,
        filter: 'none',
        msFilter: 'none',
      },
      {
        transform: ['scale(1.2, 1.2)'],
        filter: 'alpha(opacity=0)',
        msFilter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)',
      },
    ],
    [`@keyframes ${aniName}`, '0%', '50%', '100%'],
  ],
};
export default css;
export {aniName};
