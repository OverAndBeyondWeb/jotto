import { actionTypes } from './actionTypes';
import { correctGuess } from './';

describe('actionCreaters', () => {

  test('correctGuess returns the correct action', () => {
    const action = {type: actionTypes.CORRECT_GUESS};
    expect(correctGuess()).toEqual(action);
  });

});