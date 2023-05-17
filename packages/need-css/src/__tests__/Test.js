import {expect} from "chai";
import { jsdom } from "reshow-unit-dom";
import needCSS from "../index";

describe("Test need-css", () => {
  beforeEach(() => {
    jsdom(null, { runScripts: "dangerously", resources: "usable" });
  });
  it("basic test", (done) => {
    needCSS(["prism"]);
    setTimeout(()=>{
      expect(document.getElementsByTagName("link").length).to.equal(1);
      done();
    }, 500);
  });
});
