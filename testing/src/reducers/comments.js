import { SAVE_COMMENT } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      //take all the existing comments 6 add them to a new array
      return [...state, action.payload];
    default: return state;
  }
}