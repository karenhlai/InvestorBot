// import merge from 'lodash/merge';
import { INCREMENT, DECREMENT } from '../actions/portfolio_actions';

export default (state = 0, action) => {
  Object.freeze(state);
  // let nextState = merge({}, state);
  // debugger
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT: 
      return state - 1;
    default:
      return state;
  }
};
