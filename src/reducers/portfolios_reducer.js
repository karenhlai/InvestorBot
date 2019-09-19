import { RECEIVE_PORTFOLIOS, RECEIVE_PORTFOLIO } from '../actions/portfolio_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_PORTFOLIOS: 
      nextState = merge({}, state, action.portfolios);
      return nextState;
    case RECEIVE_PORTFOLIO:
      nextState = merge({}, state, { [action.portfolio.id]: action.portfolio} );
      return nextState;
    default:
      return state;
  }
};