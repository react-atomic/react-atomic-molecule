import React from "react";
import { expect } from "chai";
import { mount } from "reshow-unit";
import Unsafe from "../Unsafe";

describe("Test Unsafe", () => {
  it("test basic", () => {
    const wrapper = mount(<Unsafe />);
    expect(wrapper.html()).to.have.string("us-html");
  });
  it("test string", () => {
    const wrapper = mount(<Unsafe>{"<br />"}</Unsafe>);
    expect(wrapper.html()).to.equal(`<div class="us-html ui"><br></div>`);
  });
  it("test function", () => {
    const wrapper = mount(<Unsafe>{() => "<br />"}</Unsafe>);
    expect(wrapper.html()).to.equal(`<div class="us-html ui"><br></div>`);
  });
});
