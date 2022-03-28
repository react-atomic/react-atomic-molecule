import React from "react";
import { expect } from "chai";
import { mount } from "reshow-unit";
import Image from "../Image";

describe("Test Image", () => {
  it("basic test", () => {
    const wrapper = mount(<Image />);
    expect(wrapper.html()).to.have.string(`loading="lazy"`);
  });
  it("img embedded in div", () => {
    const wrapper = mount(<Image atom="div" />);
    expect(wrapper.html()).to.have.string(`loading="lazy"`);
  });
  it("unset loading", () => {
    const wrapper = mount(<Image loading={null} />);
    expect(wrapper.html()).to.not.have.string(`loading="lazy"`);
  });
  it("img embedded in div not set loading", () => {
    const wrapper = mount(<Image atom="div" loading={null} />);
    expect(wrapper.html()).to.not.have.string(`loading="lazy"`);
  });
});
