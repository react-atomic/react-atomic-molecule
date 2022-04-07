import React from "react";

import { expect } from "chai";
import { render } from "reshow-unit";

import Field from "../Field";

describe("Test Field", () => {

  it("test disabled", () => {
    const wrapper = render(<Field />);
    expect(wrapper.html()).to.have.string("div");
  });

  it("isGroup with style", () => {
    const wrapper = render(<Field style={{ padding: 111 }} />);
    expect(wrapper.html()).to.have.string(
      'style="padding: 111px; box-sizing: inherit;"'
    );
  });

  it("isGroup with fieldStyle", () => {
    const wrapper = render(<Field style={{ padding: 222 }} />);
    expect(wrapper.html()).to.have.string(
      'style="padding: 222px; box-sizing: inherit;"'
    );
  });

  it("not isGroup with fieldStyle", () => {
    const wrapper = render(<Field atom="input" fieldStyle={{ padding: 333 }} />);
    expect(wrapper.html()).to.have.string(
      'style="padding: 333px; box-sizing: inherit;"'
    );
  });
});
