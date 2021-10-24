import get from "get-object-value";

const DISPLAY_NAME = "displayName";
const TYPE = "type";

const getDisplayName = (el) =>
  get(el, [DISPLAY_NAME], get(el, [TYPE, DISPLAY_NAME]));

export default getDisplayName;
