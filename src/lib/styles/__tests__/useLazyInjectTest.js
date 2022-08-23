import React from "react";
import { expect } from "chai";
import { render, cleanIt, waitFor } from "reshow-unit";

import useLazyInject from "../useLazyInject";
import styleStore from "../store";
import SemanticUI from "../../../ui/molecules/SemanticUI";

describe("Test useLazyInject", () => {
  beforeEach(() => {
    cleanIt();
    styleStore.counter = 0;
    styleStore.newStyles = [];
  });

  let injects;
  const InjectStyles = {
    test: [
      {
        padding: 1,
      },
    ],
  };

  it("test useLazyInject", async () => {
    const VDom = (props) => {
      injects = useLazyInject(InjectStyles, injects);
      return <SemanticUI styles={injects.test} />;
    };
    const wrapper = render(<VDom />);
    expect(wrapper.html()).to.equal(`<div class="c1_ ui"></div>`);

    await waitFor(() => {
      expect(
        document.getElementsByTagName("style")[0].innerHTML
      ).to.have.string(`padding: 1px`);
    });
  });
});
