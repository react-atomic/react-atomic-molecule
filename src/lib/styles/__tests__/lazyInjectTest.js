import { expect } from "chai";
import query from "css-query-selector";

import lazyInject from "../lazyInject";
import stylesToCSS from "../stylesToCSS";
import store from "../store";
import getStyleTagId from "../getStyleTagId";
import cleanStyleTag from "../cleanStyleTag";

describe("Test lazyInject", () => {
  beforeEach(() => {
    store.counter = 0;
    store.registry = {};
  });

  const InjectStyles = {
    fakeKeyframe: [
      [
        {
          transform: ["rotateZ(0deg)"],
        },
        {
          transform: ["rotateZ(360deg)"],
        },
      ],
      ["@keyframes spin", "0%", "100%"],
    ],
  };

  it("test keyframe", () => {
    let injects;
    injects = lazyInject(InjectStyles, injects);
    expect(JSON.stringify(store.registry)).to.have.string("@keyframes spin");
  });

  it("test clean store", () => {
    let injects;
    injects = lazyInject(InjectStyles, injects);
    const id = getStyleTagId(injects.fakeKeyframe.styleId);
    const styleDom = query.one("#" + id);
    expect(!!styleDom).to.be.true;
    cleanStyleTag(injects);
    const styleDom2 = query.one("#" + id);
    expect(!!styleDom2).to.be.false;
  });
});
