import { actionTypes } from '../actions/actionTypes';
import { successReducer } from './successReducer';

describe('successReducer', () => {

  test('returns false if action type is not CORRECT_GUESS', () => {
    expect(successReducer(undefined, {})).toBe(false);
  });

  test('returns true if action type is CORRECT_GUESS', () => {
    const action = {type: actionTypes.CORRECT_GUESS}
    expect(successReducer(undefined, action)).toBe(true);
  });

});