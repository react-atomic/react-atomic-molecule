import { expect } from "chai";

import mergeDefaultValue from "../mergeDefaultValue";


describe("Test merge default value", () => {

  it('default value is not exists', ()=>{
      const o = {};
      const actural = mergeDefaultValue(
        o,
        {foo: 'bar'}
      ); 
      const expected = {foo: 'bar'};
      expect(actural).to.deep.equal(expected);
  });

  it('default value is exists', ()=>{
      const o = {foo: 'bar1'};
      const actural = mergeDefaultValue(
        o,
        {foo: 'bar'}
      ); 
      const expected = {foo: 'bar1'};
      expect(actural).to.deep.equal(expected);
  });

  it('default value is object', ()=>{
      const o = {foo: {
        bar1: 'a',
      }};
      const actural = mergeDefaultValue(
        o,
        {foo: {bar2: 'b'}}
      ); 
      const expected = {foo: {
        bar1: 'a',
        bar2: 'b',
      }};
      expect(actural).to.deep.equal(expected);
  });

  it('default value is object and exists', ()=>{
      const o = {foo: {
        bar1: 'a',
      }};
      const actural = mergeDefaultValue(
        o,
        {foo: {bar1: 'b'}}
      ); 
      const expected = {foo: {
        bar1: 'a',
      }};
      expect(actural).to.deep.equal(expected);
  });

  it('merge with null', ()=>{
      const o = null;
      const actural = mergeDefaultValue(
        o,
        {foo: 'bar'}
      ); 
      const expected = {foo: 'bar'};
      expect(actural).to.deep.equal(expected);
  });
});
