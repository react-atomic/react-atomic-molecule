import { expect } from "chai";

import stylesToCSS from "../stylesToCSS";
import reactStyle from "../index";
import store from "../store";

import { min } from "../../../config/styles/rwd";

describe("Test stylesToCSS", () => {
  beforeEach(() => {
    store.counter = 0;
  });

  it("basic test", () => {
    const acture = stylesToCSS();
    expect(acture).to.deep.equal({ styleIds: [], objArr: {}, cssArr: {} });
  });

  it("join selector test", () => {
    const oReactStyle = reactStyle({ width: 100 }, [min.md, [".xxx", ".yyy"]]);
    const acture = stylesToCSS(oReactStyle);
    expect(JSON.stringify(acture.cssArr)).to.have.string(".xxx,.yyy");
  });

  it("style only test", () => {
    const oReactStyle = reactStyle({ width: 100 });
    const acture = stylesToCSS(oReactStyle);
    expect(JSON.stringify(acture.cssArr)).to.have.string(".c1_,.c1_.c1_1,");
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
      ["@keyframes spin", "0%", "100%"]
    );
    const acture = stylesToCSS(oReactStyle);
    expect(JSON.stringify(acture.cssArr)).to.have.string("@keyframes spin");
  });
});
