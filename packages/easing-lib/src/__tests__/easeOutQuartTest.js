import {expect} from 'chai';

import aniCal from "../easeOutQuart";

describe('Test easeOutQuart', () => {
  it("basic test", ()=>{
    const start = 0; 
    const to = 100;
    const duration = 5;
    const actual1 = Math.floor(aniCal(1, start, to, duration));
    const actual2 = Math.floor(aniCal(2, start, to, duration));
    const actual3 = Math.floor(aniCal(3, start, to, duration));
    const actual4 = Math.floor(aniCal(4, start, to, duration));
    const actual5 = Math.floor(aniCal(5, start, to, duration));
    expect({actual1: 59, actual2: 87, actual3: 97, actual4: 99, actual5: 100}).to.deep.equal({actual1, actual2, actual3, actual4, actual5});
  });

  it("test reduce", ()=>{
    const start = 100; 
    const to = 0;
    const duration = 5;
    const actual1 = start - Math.floor(aniCal(1, to, start, duration));
    const actual2 = start - Math.floor(aniCal(2, to, start, duration));
    const actual3 = start - Math.floor(aniCal(3, to, start, duration));
    const actual4 = start - Math.floor(aniCal(4, to, start, duration));
    const actual5 = start - Math.floor(aniCal(5, to, start, duration));
    expect({actual1: 41, actual2: 13, actual3: 3, actual4: 1, actual5: 0}).to.deep.equal({actual1, actual2, actual3, actual4, actual5});
  });
});
