import { expect } from "chai";
import EasingProcessor from "../EasingProcessor";

describe("Test EasingProcessor", () => {
  let keepRAF;
  before(() => {
    keepRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = (func)=>{
      setTimeout(()=>{
        func(new Date().getTime());
      },1);
    };
  });
  after(() => {
    window.requestAnimationFrame = keepRAF;
  });

  it("basic test", (done) => {
    EasingProcessor({
      duration: 5,
      isContinue: () => true,
      stop: () => done(),
    });
  });
});
