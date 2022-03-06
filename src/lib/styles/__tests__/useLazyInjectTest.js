import React from "react";
import { expect } from "chai";
import { mount, cleanIt } from "reshow-unit";

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
  it("test useLazyInject", (done) => {
    const VDom = (props) => {
      injects = useLazyInject(InjectStyles, injects);
      return <SemanticUI styles={injects?.test} />;
    };
    const wrapper = mount(<VDom />);
    setTimeout(() => {
      expect(wrapper.html()).to.equal(`<div class="c2_ ui"></div>`);
      expect(
        document.getElementsByTagName("style")[1].innerHTML
      ).to.have.string(`padding: 1px`);
      done();
    }, 30);
  });
});
