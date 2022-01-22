import { css } from "create-el";
import { win } from "win-doc";
import get from "get-object-value";

const semanticMap = {
  button: "/npm/semantic-ui-button@latest/button.min.css",
  card: "/npm/semantic-ui-card@latest/card.min.css",
  checkbox: "/npm/semantic-ui-checkbox@latest/checkbox.min.css",
  dimmer: "/npm/semantic-ui-dimmer@latest/dimmer.min.css",
  divider: "/npm/semantic-ui-divider@latest/divider.min.css",
  dropdown: "/npm/semantic-ui-dropdown@latest/dropdown.min.css",
  form: "/npm/semantic-ui-form@latest/form.min.css",
  header: "/npm/semantic-ui-header@latest/header.min.css",
  input: "/npm/semantic-ui-input@latest/input.min.css",
  item: "/npm/semantic-ui-item@latest/item.min.css",
  image: "/npm/semantic-ui-image@latest/image.min.css",
  label: "/npm/semantic-ui-label@latest/label.min.css",
  list: "/npm/semantic-ui-list@latest/list.min.css",
  menu: "/npm/semantic-ui-menu@latest/menu.min.css",
  message: "/npm/semantic-ui-message@latest/message.min.css",
  modal: "/npm/semantic-ui-modal@latest/modal.min.css",
  popup: "/npm/semantic-ui-popup@latest/popup.min.css",
  progress: "/npm/semantic-ui-progress@latest/progress.min.css",
  rail: "/npm/semantic-ui-rail@latest/rail.min.css",
  segment: "/npm/semantic-ui-segment@latest/segment.min.css",
  search: "/npm/semantic-ui-search@latest/search.min.css",
  table: "/npm/semantic-ui-table@latest/table.min.css",
  tab: "/npm/semantic-ui-tab@latest/tab.min.css",
};

const cssMap = {
  "fixed-data-table":
    "/npm/fixed-data-table-2@0.8.13/dist/fixed-data-table.min.css",
  prismjs: "/npm/prismjs/themes/prism.min.css",
};

const group = {
  semantic: semanticMap,
  default: cssMap,
};

const cdn = "https://cdn.jsdelivr.net";
const load = [];

const needCSS = (mods, groupKey = "default") => {
  if (win().__null) {
    return;
  }
  const map = get(group, [groupKey], {});
  mods.forEach((mod) => {
    let url = get(map, [mod]);
    url = url ? cdn + url : mod;
    if (url) {
      if (load[url]) {
        return;
      } else {
        load[url] = true;
        css()()(url);
      }
    }
  });
};

export default needCSS;
