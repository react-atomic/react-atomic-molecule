//@ts-check

import { hasWin, win } from "win-doc";
import { NEW_OBJ } from "reshow-constant";

const g = hasWin() ? win() : globalThis;

/**
 * Assign value from g.reactStylesStore for sync npm link case
 */
const stylesStore = g.reactStylesStore
  ? g.reactStylesStore
  : {
      registry: NEW_OBJ(),
      newStyles: [],
      counter: 0,
    };

g.reactStylesStore = stylesStore;

export default stylesStore;
