import { win } from "win-doc";

const g = win().__null ? global : win();

/**
 * Assign value from g.reactStylesStore for sync npm link case
 */
const stylesStore = g.reactStylesStore
  ? g.reactStylesStore
  : {
      load: {},
      registry: {},
      newStyles: [],
      counter: 0,
    };

g.reactStylesStore = stylesStore;

export default stylesStore;
