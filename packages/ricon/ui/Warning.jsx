import base from "./base";

const Warning = (props) => {
  const d = "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z";
  return base("Warning", d)(props);
};

export default Warning;
