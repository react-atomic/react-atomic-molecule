import { hasWin, win } from "win-doc";

const g = hasWin() ? win() : global;

/**
 * Assign value from g.reactStylesStore for sync npm link case
 */
const stylesStore = g.reactStylesStore
  ? g.reactStylesStore
  : {
      registry: Object.create(null),
      newStyles: [],
      counter: 0,
    };

g.reactStylesStore = stylesStore;

export default stylesStore;
