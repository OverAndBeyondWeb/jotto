import React from 'react';
import Congrats from './Congrats';
import { shallow } from 'enzyme';


const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
};

test('renders without crashing', () => {
  const wrapper = setup();
  
  expect(wrapper.find('.congrats').length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({success: false});

  expect(wrapper.find('.congrats').text()).toBe('');
});

test('renders non-empty message when `success` prop is true', () => {
  const wrapper = setup({success: true});

  expect(wrapper.find('.congrats').exists('.congrats-message')).toBe(true);
});