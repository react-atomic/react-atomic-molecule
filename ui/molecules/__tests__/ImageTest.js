import React from "react";
import { expect } from "chai";
import { render } from "reshow-unit";
import Image from "../Image";

describe("Test Image", () => {
  it("basic test", () => {
    const wrapper = render(<Image />);
    expect(wrapper.html()).to.have.string(`loading="lazy"`);
  });
  it("img embedded in div", () => {
    const wrapper = render(<Image atom="div" />);
    expect(wrapper.html()).to.have.string(`loading="lazy"`);
  });
  it("unset loading", () => {
    const wrapper = render(<Image loading={null} />);
    expect(wrapper.html()).to.not.have.string(`loading="lazy"`);
  });
  it("img embedded in div not set loading", () => {
    const wrapper = render(<Image atom="div" loading={null} />);
    expect(wrapper.html()).to.not.have.string(`loading="lazy"`);
  });
  it("test multi children", () => {
    const wrapper = render(
      <Image
        atom="picture"
        prepend={<source media="(min-width:650px)" srcSet="foo1.jpg" />}
        src="foo2.jpg"
        children={<source media="(min-width:465px)" srcSet="foo3.jpg" />}
      />
    );
    expect(wrapper.html()).to.equal(
      `<picture class="ui"><source media="(min-width:650px)" srcset="foo1.jpg"><img src="foo2.jpg" loading="lazy" class="ui"><source media="(min-width:465px)" srcset="foo3.jpg"></picture>`
    );
  });
});
