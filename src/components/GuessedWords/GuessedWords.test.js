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

  describe('if words are guessed', () => {
    let wrapper;

    const props = {
      guessedWords: [
        {guessedWord: 'caddy', letterMatchCount: 4},
        {guessedWord: 'chevy', letterMatchCount: 5},
        {guessedWord: 'nissan', letterMatchCount: 6},
      ]
    };

    beforeEach(() => {
      wrapper = setup(props);
    });

    test('renders current game activity', () => {
      expect(wrapper.find('.current-game-activity').exists()).toBe(true);
    });

    test('has correct number of guessed words', () => {
      const guessedWordNodes = wrapper.find('.guessed-word');
      expect(guessedWordNodes.length).toBe(props.guessedWords.length);
    });

  });

});