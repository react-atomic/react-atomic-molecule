import { KEYS } from "reshow-constant";
import { remove } from "create-el";
import query from "css-query-selector";

import getStyleTagId from "./getStyleTagId";

const cleanStyleTag = (StyleMap) => {
  KEYS(StyleMap || []).forEach((key) => {
    const id = getStyleTagId(StyleMap[key].styleId);
    const styleDom = query.one("#" + id);
    remove(styleDom);
  });
};

export default cleanStyleTag;
