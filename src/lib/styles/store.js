import { win } from "win-doc";

const oWin = win();
const g = oWin ? oWin : global;

const stylesStore = {
  registry: {},
  newStyles: [],
  counter: 0,
};

g.reactStylesStore = stylesStore;

export default stylesStore;
