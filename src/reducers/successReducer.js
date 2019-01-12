import { actionTypes } from '../actions/actionTypes';

export const successReducer = (state=false, action) => {
  switch(action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};