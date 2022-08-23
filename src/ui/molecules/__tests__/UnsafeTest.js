import React from "react";
import { expect } from "chai";
import { render } from "reshow-unit";
import Unsafe from "../Unsafe";

describe("Test Unsafe", () => {
  it("basic test", () => {
    const wrapper = render(<Unsafe />);
    expect(wrapper.html()).to.have.string("us-html");
  });
  it("test string", () => {
    const wrapper = render(<Unsafe>{"<br />"}</Unsafe>);
    expect(wrapper.html()).to.equal(`<div class="us-html ui"><br></div>`);
  });
  it("test function", () => {
    const wrapper = render(<Unsafe>{() => "<br />"}</Unsafe>);
    expect(wrapper.html()).to.equal(`<div class="us-html ui"><br></div>`);
  });
});
