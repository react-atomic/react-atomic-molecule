import { expect } from "chai";
import { render } from "reshow-unit";

import InputBox from "../InputBox";

describe("Test InputBox", () => {
  it("basic test", () => {
    const wrap = render(<InputBox />);
    expect(wrap.html()).to.have.string("input");
  });
});
