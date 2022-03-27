import base from "./base";

const Downlod = ({ type, ...props }) => {
  let d;
  switch (type) {
    case "file":
      d = "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z";
      break;
    case "cloud":
    default:
      d =
        "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z";
      break;
  }
  return base("Downlod", d)(props);
};

export default Downlod;
