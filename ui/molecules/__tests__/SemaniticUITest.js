import React from 'react';

import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import SemanticUI from '../SemanticUI';

describe('Test SemaniticUI', () => {
  it('basic test', () => {
    const wrapper = mount(
      <SemanticUI />,
    );
    expect(wrapper.html()).to.have.string('div');
  });
  it('test render children', () => {
    const wrapper = mount(
      <SemanticUI><span /></SemanticUI>,
    );
    expect(wrapper.html()).to.have.string('span');
  });
  it('test not render children', () => {
    const wrapper = mount(
      <SemanticUI renderChildren={false}><span /></SemanticUI>,
    );
    expect(wrapper.html()).to.not.have.string('span');
  });
  it('test render img', () => {
    const wrapper = mount(
      <SemanticUI atom="img" />,
    );
    expect(wrapper.html()).to.have.string('img');
  });
});
