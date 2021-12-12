import {expect} from 'chai';

import aniCal from "../easeInExpo";


describe('Test easeInExpo', () => {
  it("basic test", ()=>{
    const start = 0; 
    const to = 100;
    const duration = 5;
    const actual1 = aniCal(1, start, to, duration).toFixed(2);
    const actual2 = aniCal(2, start, to, duration).toFixed(2);
    const actual3 = aniCal(3, start, to, duration).toFixed(2);
    const actual4 = aniCal(4, start, to, duration).toFixed(2);
    const actual5 = aniCal(5, start, to, duration).toFixed(2);

    expect({actual1: "0.39", actual2: "1.56", actual3: "6.25", actual4: "25.00", actual5: "100.00"}).to.deep.equal({actual1, actual2, actual3, actual4, actual5});
  });
});
