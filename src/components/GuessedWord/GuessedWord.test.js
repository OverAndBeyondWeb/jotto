import React from 'react';
import { shallow } from 'enzyme';

import GuessedWord from './GuessedWord';

const setup = props => {
  return shallow(<GuessedWord {...props} />);
};

describe('<GuessedWord />', () => {

  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper.find('.guessed-word')).toBeTruthy();
  })
});