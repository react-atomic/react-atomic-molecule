//@ts-check

import { css } from "create-el";
import { win, hasWin } from "win-doc";
import get from "get-object-value";
import query from "css-query-selector";

// https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/components/
const SEMANTIC_VERSION = "/npm/fomantic-ui@2.8.8/dist/components";

const semanticMap = {
  button: `${SEMANTIC_VERSION}/button.min.css`,
  card: `${SEMANTIC_VERSION}/card.min.css`,
  checkbox: `${SEMANTIC_VERSION}/checkbox.min.css`,
  dimmer: `${SEMANTIC_VERSION}/dimmer.min.css`,
  divider: `${SEMANTIC_VERSION}/divider.min.css`,
  dropdown: `${SEMANTIC_VERSION}/dropdown.min.css`,
  form: `${SEMANTIC_VERSION}/form.min.css`,
  header: `${SEMANTIC_VERSION}/header.min.css`,
  image: `${SEMANTIC_VERSION}/image.min.css`,
  input: `${SEMANTIC_VERSION}/input.min.css`,
  item: `${SEMANTIC_VERSION}/item.min.css`,
  label: `${SEMANTIC_VERSION}/label.min.css`,
  list: `${SEMANTIC_VERSION}/list.min.css`,
  loader: `${SEMANTIC_VERSION}/loader.min.css`,
  menu: `${SEMANTIC_VERSION}/menu.min.css`,
  message: `${SEMANTIC_VERSION}/message.min.css`,
  modal: `${SEMANTIC_VERSION}/modal.min.css`,
  popup: `${SEMANTIC_VERSION}/popup.min.css`,
  progress: `${SEMANTIC_VERSION}/progress.min.css`,
  rail: `${SEMANTIC_VERSION}/rail.min.css`,
  search: `${SEMANTIC_VERSION}/search.min.css`,
  segment: `${SEMANTIC_VERSION}/segment.min.css`,
  tab: `${SEMANTIC_VERSION}/tab.min.css`,
  table: `${SEMANTIC_VERSION}/table.min.css`,
};

const cssMap = {
  "fixed-data-table":
    "/npm/fixed-data-table-2@0.8.13/dist/fixed-data-table.min.css",
  prism: "/npm/prismjs/themes/prism.min.css",
};

const group = {
  semantic: semanticMap,
  default: cssMap,
};

const cdn = "https://cdn.jsdelivr.net";
const load = [];

/**
 * Clean bfcache for offline
 */
win().addEventListener &&
  win().addEventListener("load", () => load.splice(0, load.length));

/**
 * @param {string[]} mods
 * @param {string} groupKey
 */
const needCSS = (mods, groupKey = "default") => {
  const map = get(group, [groupKey], {});
  mods.forEach((mod) => {
    let url = get(map, [mod]);
    url = url ? cdn + url : mod;
    if (url) {
      if (load[url]) {
        return;
      } else {
        load[url] = true;
        if (!hasWin()) {
          console.log(`<link rel="stylesheet" type="text/css" href="${url}">`);
        } else {
          const cssDom = query.one(`link[href="${url}"]`);
          if (!cssDom) {
            css()()(url);
          }
        }
      }
    }
  });
};

export default needCSS;
