import { getDefault } from "get-object-value";
import { reactStyle, injectStyle } from "react-atomic-molecule";
import callfunc from "call-func";

const inject = {};
let c = 0;

const processCss = (cb) => (css) => {
  css = getDefault(css);
  const keys = Object.keys(css);
  if (keys.length) {
    keys.forEach((key) => {
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
      import("./candleInTheWind").then(callback);
      break;
    case "fadeIn":
      import("./fadeIn").then(callback);
      break;
    case "fadeInUp":
      import("./fadeInUp").then(callback);
      break;
    case "fadeInUpBig":
      import("./fadeInUpBig").then(callback);
      break;
    case "fadeInRight":
      import("./fadeInRight").then(callback);
      break;
    case "fadeInDown":
      import("./fadeInDown").then(callback);
      break;
    case "fadeInLeft":
      import("./fadeInLeft").then(callback);
      break;
    case "fadeOut":
      import("./fadeOut").then(callback);
      break;
    case "fadeOutUp":
      import("./fadeOutUp").then(callback);
      break;
    case "fadeOutRight":
      import("./fadeOutRight").then(callback);
      break;
    case "fadeOutDown":
      import("./fadeOutDown").then(callback);
      break;
    case "fadeOutLeft":
      import("./fadeOutLeft").then(callback);
      break;
    case "pulsate":
      import("./pulsate").then(callback);
      break;
    case "spin":
      import("./spin").then(callback);
      break;
  }
  inject[key] = true;
};
export default getKeyframeCss;
