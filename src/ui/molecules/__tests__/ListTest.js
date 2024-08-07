import React from "react";

import { expect } from "chai";
import { render } from "reshow-unit";
import List from "../List";
import Item from "../Item";

describe("Test List", () => {
  it("basic test", () => {
    const wrapper = render(<List />);
    expect(wrapper.html()).to.have.string("list");
  });
  it("test with table", () => {
    const wrapper = render(<List atom="table" />);
    expect(wrapper.html()).to.equal('<table class="list ui"></table>');
  });
  it("test with table item", () => {
    const wrapper = render(
      <List atom="table">
        <Item />
        <Item />
      </List>,
    );
    expect(wrapper.html()).to.equal(
      '<table class="list ui"><tbody><tr><td class="item ui"></td></tr><tr><td class="item ui"></td></tr></tbody></table>',
    );
  });
  it("test with table item and horizontal", () => {
    const wrapper = render(
      <List atom="table" horizontal>
        <Item />
        <Item />
      </List>,
    );
    expect(wrapper.html()).to.equal(
      '<table class="list horizontal ui"><tbody><tr><td class="item ui"></td><td class="item ui"></td></tr></tbody></table>',
    );
  });
});
