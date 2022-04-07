import React from "react";
import { expect } from "chai";
import { render, cleanIt, waitFor } from "reshow-unit";

import useLazyInject from "../useLazyInject";
import styleStore from "../store";
import SemanticUI from "../../../../ui/molecules/SemanticUI";

let injects;
const InjectStyles = {
  test: [
    {
      padding: 1,
    },
  ],
};

describe("Test useLazyInject", () => {
  beforeEach(() => {
    cleanIt();
    styleStore.newStyles = [];
  });

  it("test useLazyInject", async () => {
    const VDom = (props) => {
      injects = useLazyInject(InjectStyles, injects);
      return <SemanticUI styles={injects?.test} />;
    };
    const wrapper = render(<VDom />);
    expect(wrapper.html()).to.equal(`<div class="c2_ ui"></div>`);

    await waitFor(() => {
      expect(
        document.getElementsByTagName("style")[1].innerHTML
      ).to.have.string(`padding: 1px`);
    });
  });
});
