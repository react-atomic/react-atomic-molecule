import { expect } from "chai";
import aniTimer from "../aniTimer";

describe("Test aniTimer", () => {
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
    aniTimer({
      isContinue: () => true,
      done: () => done(),
    }, 5);
  });
});
