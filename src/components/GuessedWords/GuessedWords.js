import React from 'react';
import PropTypes from 'prop-types';

const instructions = (
  <div className="instructions">Guess a Word!</div>
);

const activity = (
  <div className="current-game-activity">activity</div>
)

const GuessedWords = props => {
  const content = props.guessedWords.length === 0 ? instructions : activity;

  return <div className="guessed-words">{content}</div>
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number
    })
  ).isRequired
};

export default GuessedWords;