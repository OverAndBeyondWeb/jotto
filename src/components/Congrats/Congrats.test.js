import React from 'react';
import Congrats from './Congrats';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

const defaultProps = {success: false};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Congrats {...setupProps} />);
};

test('renders without crashing', () => {
  const wrapper = setup();
  expect(wrapper.find('.congrats').length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup();
  expect(wrapper.find('.congrats').text()).toBe('');
});

test('renders non-empty message when `success` prop is true', () => {
  const wrapper = setup({success: true});
  expect(wrapper.find('.congrats').exists('.congrats-message')).toBe(true);
});

test('does not throw warning with expected props', () => {
  const expectedProps = {success: false};
  const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name);
  expect(propError).toBe(undefined);
});