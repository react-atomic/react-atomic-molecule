import { win } from "win-doc";

let stylesStore;

const oWin = win();
const g = oWin ? oWin : global;

if (g.reactStylesStore) {
  stylesStore = g.reactStylesStore;
} else {
  stylesStore = g.reactStylesStore = {
    registry: [],
    newStyles: [],
    mods: [],
    counter: 0,
  };
}

export default stylesStore;
