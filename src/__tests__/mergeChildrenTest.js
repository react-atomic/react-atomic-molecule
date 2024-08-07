import { expect } from "chai";
import React from "react";

import { render } from "reshow-unit";

import mergeChildren from "../mergeChildren";

describe("Test mergeChildren", () => {
  it("basic test (prepend)", () => {
    const FakeDom = ({ children }) => (
      <div>{mergeChildren(<i key="i" />, children)}</div>
    );

    const vDom = (
      <FakeDom>
        <span />
        <span />
      </FakeDom>
    );

    const wrap = render(vDom);
    expect(wrap.html()).to.equal(
      "<div><i></i><span></span><span></span></div>",
    );
  });

  it("test append", () => {
    const FakeDom = ({ children }) => (
      <div>{mergeChildren(<i key="i" />, children, true)}</div>
    );

    const vDom = (
      <FakeDom>
        <span />
      </FakeDom>
    );

    const wrap = render(vDom);
    expect(wrap.html()).to.equal("<div><span></span><i></i></div>");
  });

  it("test empty children", () => {
    const FakeDom = ({ children }) => (
      <div>{mergeChildren(<i key="i" />, children)}</div>
    );

    const wrap = render(<FakeDom />);
    expect(wrap.html()).to.equal("<div><i></i></div>");
  });

  it("test merge twice", () => {
    const FakeDom = ({ children }) => (
      <div>{mergeChildren(<i />, mergeChildren(<i />, children))}</div>
    );

    const wrap = render(<FakeDom />);
    expect(wrap.html()).to.equal("<div><i></i><i></i></div>");
  });
});
