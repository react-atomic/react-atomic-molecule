import { expect } from "chai";

import stylesToCSS from "../stylesToCSS";
import reactStyle from "../index";
import store from "../store";

import { min } from "../../../config/styles/rwd";
import { NEW_OBJ } from "reshow-constant";

describe("Test stylesToCSS", () => {
  beforeEach(() => {
    store.counter = 0;
    store.registry = NEW_OBJ();
  });

  it("basic test", () => {
    const actual = stylesToCSS();
    expect(actual).to.deep.equal({
      styleIds: [],
      styleObjMap: {},
      styleRuleMap: {},
    });
  });

  it("join selector test", () => {
    const oReactStyle = reactStyle({ width: 100 }, [min.md, [".xxx", ".yyy"]]);
    const actual = stylesToCSS([oReactStyle]);
    expect(JSON.stringify(actual.styleRuleMap)).to.have.string(".xxx,.yyy");
  });

  it("style only test", () => {
    const oReactStyle = reactStyle({ width: 100 });
    const actual = stylesToCSS([oReactStyle]);
    expect(JSON.stringify(actual.styleRuleMap)).to.have.string(
      ".c0_,.c0_.c0_1,",
    );
  });

  it("test keyframe", () => {
    const oReactStyle = reactStyle(
      [
        {
          transform: ["rotateZ(0deg)"],
        },
        {
          transform: ["rotateZ(360deg)"],
        },
      ],
      ["@keyframes spin", "0%", "100%"],
    );
    const actual = stylesToCSS([oReactStyle]);
    expect(JSON.stringify(actual.styleRuleMap)).to.have.string(
      "@keyframes spin",
    );
  });
});
