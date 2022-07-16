import {expect} from "chai";
import { jsdom, getSinon } from "reshow-unit-dom";
import getKeyframeCss from "../index";

describe("Test getKeyframeCss", () => {

  it("basic test", (done)=>{
    const spy = getSinon().spy();
    expect(spy.called).to.be.false;
    getKeyframeCss("fadeIn", spy);
    setTimeout(()=>{
      expect(spy.called).to.be.true;
      done();
    }, 10);
  });

});
