import React from 'react';
import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'porshe', letterMatchCount: 3
    }
  ]
};

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<GuessedWords {...setupProps} />);
};

describe('<GuessedWord />', () => {

  // initial tests for render and prop types
  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper.find('.guessed-words')).toBeTruthy();
  });

  test('does not throw error with expected props', () => {
    const propError = checkPropTypes(GuessedWords.propTypes, defaultProps, 'prop', GuessedWords.name);
    expect(propError).toBeUndefined();
  });

  describe('if words no are guessed', () => {
    
    test('renders game instructions', () => {
      const wrapper = setup({guessedWords: []});
      expect(wrapper.find('.instructions').exists()).toBe(true);
    });

  });

  describe('if no words are guessed', () => {

    test('renders current game activity', () => {
      const wrapper = setup();
      expect(wrapper.find('.current-game-activity').exists()).toBe(true);
    });

  });

});