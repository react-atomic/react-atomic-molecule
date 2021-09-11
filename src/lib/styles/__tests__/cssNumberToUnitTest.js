import { expect } from "chai";

import cssNumberToUnit from "../cssNumberToUnit";

describe("Test cssNumberToUnit", () => {
  it("basic test", () => {
    const actual = cssNumberToUnit("width", 1);
    expect(actual).to.equal("1px");
  });

  it("test value with array", () => {
    const actual = cssNumberToUnit("width", [1, 1]);
    expect(actual).to.deep.equal(["1px", "1px"]);
  });

  it("test not append px", () => {
    const actual = cssNumberToUnit("lineHeight", 1);
    expect(actual).to.equal(1);
  });
});
