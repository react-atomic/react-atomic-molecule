import {build} from '../../cjs/src/index';

import React, {PureComponent, isValidElement} from 'react';

import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Test build', () => {
  it('test with function', () => {
    const func = props => {
      expect(props.foo).to.equal('bar');
    };
    build(func)({foo: 'bar'});
  });

  it('test with function return', () => {
    const func = props => {
      return props.foo;
    };
    const a = build(func)({foo: 'barbar'});
    // will return react instance
    expect(a.props.foo).to.equal('barbar');
    expect(isValidElement(a)).to.be.true;
  });

  it('test with component', () => {
    const FakeComponent = props => <div>{props.foo}</div>;
    const vDom = build(FakeComponent)({foo: 'bar'});
    const html = shallow(vDom).html();
    expect(html).to.equal('<div>bar</div>');
  });

  it('test with instance', () => {
    const FakeComponent = props => <div>{props.foo}</div>;
    const vDom = <FakeComponent />;
    const html = shallow(build(vDom)({foo: 'bar1'})).html();
    expect(html).to.equal('<div>bar1</div>');
  });

  it('test with class component', () => {
    class FakeComponent extends PureComponent {
      render()
      {
        return (<div>{this.props.foo}</div>);
      }
    }
    const vDom = build(FakeComponent)({foo: 'bar2'});
    const html = shallow(vDom).html();
    expect(html).to.equal('<div>bar2</div>');
  });

  it('test function return another component', ()=>{
    class FakeComponent extends PureComponent {
      render()
      {
        return (<div>{this.props.foo}</div>);
      }
    }
    const func = props => {
      return <FakeComponent {...props} />
    };
    const vDom = build(func)({foo: 'bar3'});
    const html = shallow(vDom).html();
    expect(html).to.equal('<div>bar3</div>');
  });
});
