import { expect } from "chai";
import { render } from "reshow-unit";

import GoToTop from "../GoToTop";

describe("Test GoToTop", () => {

  it("basic test", ()=>{
    const wrap = render(<GoToTop />);
    expect(wrap.html()).to.have.string("rotate(180deg)");
  });

});
