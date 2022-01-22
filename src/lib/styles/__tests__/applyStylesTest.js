import { expect } from "chai";

import applyStyles from "../applyStyles";
import StyleObject from "../StyleObject";
import store from "../store";

describe("Test applyStyles", () => {
  it("test empty className", () => {
    const oStyle = new StyleObject({}, "", "c1_");
    store.registry.c1_ = true;
    expect(oStyle.isCompiled()).to.be.true;
    const props = applyStyles({}, oStyle, 1);
    expect(props).to.deep.equal([{ className: "c1_ c1_1" }]);
  });

  it("test has className", () => {
    const oStyle = new StyleObject({}, "", "c1_");
    store.registry.c1_ = true;
    expect(oStyle.isCompiled()).to.be.true;
    const props = applyStyles({ className: "fake" }, oStyle, 1);
    expect(props).to.deep.equal([{ className: "fake c1_ c1_1" }]);
  });
});
