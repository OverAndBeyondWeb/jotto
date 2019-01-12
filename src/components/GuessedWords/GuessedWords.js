import React from 'react';
import PropTypes from 'prop-types';



const GuessedWords = props => {
  const instructions = (
    <div className="instructions">Guess a Word!</div>
  );
  
  const activity = (
    <div className="current-game-activity">
      <h3>Guessed Words</h3>
      <table>
        <thead>
          <tr>
            <th>Guess</th>
            <th>Matching Letters</th>
          </tr>
        </thead>
        <tbody>
          {props.guessedWords.map(word => (
            <tr className="guessed-word" key={word}>
              <th>
                {word.guessedWord}
              </th>
              <th>
                {word.letterMatchCount}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  const content = props.guessedWords.length === 0 ? instructions : activity;

  return <div className="guessed-words">{content}</div>
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number
    })
  )
};

export default GuessedWords;