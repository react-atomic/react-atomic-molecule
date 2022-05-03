import { getDefault } from "get-object-value";
import { reactStyle, injectStyle } from "react-atomic-molecule";
import callfunc from "call-func";
import { KEYS } from "reshow-constant";

const inject = {};
let c = 0;

const processCss = (cb) => (css) => {
  css = getDefault(css);
  const cssKeys = KEYS(css);
  if (cssKeys.length) {
    cssKeys.forEach((key) => {
      css[key].push("keyframe-" + key + "-" + c);
      reactStyle.apply(null, css[key]);
      c++;
    });
    injectStyle();
  }
  callfunc(cb);
};

const getKeyframeCss = (key, cb) => {
  if (inject[key]) {
    return;
  }
  const callback = processCss(cb);
  switch (key) {
    case "candleInTheWind":
      import(`../../es/src/candleInTheWind.mjs`).then(callback);
      break;
    case "fadeIn":
      import(`../../es/src/fadeIn.mjs`).then(callback);
      break;
    case "fadeInUp":
      import(`../../es/src/fadeInUp.mjs`).then(callback);
      break;
    case "fadeInUpBig":
      import(`../../es/src/fadeInUpBig.mjs`).then(callback);
      break;
    case "fadeInRight":
      import(`../../es/src/fadeInRight.mjs`).then(callback);
      break;
    case "fadeInDown":
      import(`../../es/src/fadeInDown.mjs`).then(callback);
      break;
    case "fadeInLeft":
      import(`../../es/src/fadeInLeft.mjs`).then(callback);
      break;
    case "fadeOut":
      import(`../../es/src/fadeOut.mjs`).then(callback);
      break;
    case "fadeOutUp":
      import(`../../es/src/fadeOutUp.mjs`).then(callback);
      break;
    case "fadeOutRight":
      import(`../../es/src/fadeOutRight.mjs`).then(callback);
      break;
    case "fadeOutDown":
      import(`../../es/src/fadeOutDown.mjs`).then(callback);
      break;
    case "fadeOutLeft":
      import(`../../es/src/fadeOutLeft.mjs`).then(callback);
      break;
    case "pulsate":
      import(`../../es/src/pulsate.mjs`).then(callback);
      break;
    case "spin":
      import(`../../es/src/spin.mjs`).then(callback);
      break;
  }
  inject[key] = true;
};
export default getKeyframeCss;
