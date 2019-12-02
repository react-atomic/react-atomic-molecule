import React from 'react';

import {expect} from 'chai';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import Field from '../Field';

describe('Test Field', () => {
  it('test disabled', () => {
    const wrapper = mount(
      <Field />,
    );
    expect(wrapper.html()).to.have.string('div');
  });
});
