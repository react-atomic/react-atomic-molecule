import build from '../build';

import React, {PureComponent, isValidElement} from 'react';

import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

describe('Test build', () => {
  it('test function', () => {
    const func = props => {
      expect(props.foo).to.equal('bar');
    };
    build(func)({foo: 'bar'});
  });

  it('test function with error', () => {
    const run = () => {
      build(props => {
        expect(props.foo).to.equal('bar111');
      })({foo: 'bar'});
    };
    expect(run).to.throw();
  });

  it('test function with return', () => {
    const a = build(props => props.foo)({foo: 'barbar'});
    expect(a).to.equal('barbar');
  });

  it('test with stateless function return', () => {
    const func = props => <div {...props} />;
    const a = build(func)({foo: 'barbar'});
    // will return react instance
    expect(a.props.foo).to.equal('barbar');
    expect(isValidElement(a)).to.be.true;
  });

  it('test function return another component', () => {
    class FakeComponent extends PureComponent {
      render() {
        return <div>{this.props.foo}</div>;
      }
    }
    const func = props => {
      return <FakeComponent {...props} />;
    };
    const vDom = build(func)({foo: 'bar3'});
    const html = shallow(vDom).html();
    expect(html).to.equal('<div>bar3</div>');
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
      render() {
        return <div>{this.props.foo}</div>;
      }
    }
    const vDom = build(FakeComponent)({foo: 'bar2'});
    const html = shallow(vDom).html();
    expect(html).to.equal('<div>bar2</div>');
  });

  it('test with clone and child', () => {
    class FakeComponent extends PureComponent {
      render() {
        const {comp, ...others} = this.props;
        return build(comp)(others, 'bar');
      }
    }
    const html = shallow(
      <FakeComponent id="foo" comp={<div>foo</div>} />,
    ).html();
    expect(html).to.equal('<div id="foo">bar</div>');
  });

  it('test with func and child', () => {
    const result = build(props => props)({foo: 'bar'}, 'hello child');
    expect(result.children).to.equal('hello child');
    expect(result.foo).to.equal('bar');
  });

  it('test with class and child', () => {
    class FakeComponent extends PureComponent {
      render() {
        return <div {...this.props} />;
      }
    }
    const vDom = build(FakeComponent)({id: 'foo'}, 'hello');
    const html = shallow(vDom).html();
    expect(html).to.equal('<div id="foo">hello</div>');
  });

  it('test with empty', () => {
    const result = build()();
    expect(result).to.be.null;
  });
});
