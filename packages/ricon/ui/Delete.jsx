import base from "./base";

const Delete = (props) => {
  const same = "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z";
  const d = {
    _: same + "M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
    forever:
      same +
      "m2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z",
    sweep:
      "M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z",
  };

  return base("Delete", d)(props);
};
export default Delete;
