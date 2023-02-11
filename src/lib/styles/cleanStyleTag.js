//@ts-check

import { KEYS } from "reshow-constant";
import { remove } from "create-el";
import query from "css-query-selector";

import getStyleTagId from "./getStyleTagId";

/**
 * @param {object} StyleMap
 */
const cleanStyleTag = (StyleMap) => {
  KEYS(StyleMap || {}).forEach((key) => {
    if (StyleMap[key].styleId) {
      const id = getStyleTagId(StyleMap[key].styleId);
      const styleDom = query.one("#" + id);
      remove(styleDom);
    }
  });
};

export default cleanStyleTag;
