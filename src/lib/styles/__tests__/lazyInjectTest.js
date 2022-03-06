import { expect } from "chai";

import lazyInject from "../lazyInject";
import stylesToCSS from "../stylesToCSS";
import store from "../store";

describe("Test lazyInject", () => {
  beforeEach(() => {
    store.counter = 0;
    store.lastCompiled = null;
  });
  it("test keyframe", () => {
    let injects;
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
    injects = lazyInject(InjectStyles, injects);
    expect(JSON.stringify(store.lastCompiled.cssArr)).to.have.string(
      "@keyframes spin"
    );
  });
});
