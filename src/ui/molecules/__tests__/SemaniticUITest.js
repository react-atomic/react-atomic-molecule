import React from "react";

import { expect } from "chai";
import { render } from "reshow-unit";

import SemanticUI from "../SemanticUI";

describe("Test SemaniticUI", () => {
  it("basic test", () => {
    const wrapper = render(<SemanticUI />);
    expect(wrapper.html()).to.have.string("div");
  });
  it("test render children", () => {
    const wrapper = render(
      <SemanticUI>
        <span />
      </SemanticUI>,
    );
    expect(wrapper.html()).to.have.string("span");
  });
  it("test not render children", () => {
    const wrapper = render(
      <SemanticUI renderChildren={false}>
        <span />
      </SemanticUI>,
    );
    expect(wrapper.html()).to.not.have.string("span");
  });
  it("test render img", () => {
    const wrapper = render(<SemanticUI atom="img" />);
    expect(wrapper.html()).to.have.string("img");
  });
});
