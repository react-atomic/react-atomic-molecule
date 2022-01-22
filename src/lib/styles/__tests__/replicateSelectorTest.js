import { expect } from "chai";
import replicateSelector from "../replicateSelector";

describe("Test replicateSelector", () => {
  it("basic test", () => {
    expect(replicateSelector("c")).to.equal(
      ".c,.c.c1,.c.c1.c2,.c.c1.c2.c3,.c.c1.c2.c3.c4,.c.c1.c2.c3.c4.c5,.c.c1.c2.c3.c4.c5.c6,.c.c1.c2.c3.c4.c5.c6.c7,.c.c1.c2.c3.c4.c5.c6.c7.c8,.c.c1.c2.c3.c4.c5.c6.c7.c8.c9"
    );
  });
});
