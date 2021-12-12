import {expect} from 'chai';
import aniCal from "../easeInBack";

describe('Test easeInBack', () => {
  it("basic test", ()=>{
    const start = 0; 
    const to = 100;
    const duration = 5;
    const actual1 = aniCal(1, start, to, duration).toFixed(2);
    const actual2 = aniCal(2, start, to, duration).toFixed(2);
    const actual3 = aniCal(3, start, to, duration).toFixed(2);
    const actual4 = aniCal(4, start, to, duration).toFixed(2);
    const actual5 = aniCal(5, start, to, duration).toFixed(2);
    expect({actual1: "-4.65", actual2: "-9.94", actual3: "-2.90", actual4: "29.42", actual5: "100.00"}).to.deep.equal({actual1, actual2, actual3, actual4, actual5});
  });
});
