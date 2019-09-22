import merge from 'lodash/merge';
import { FETCH_PORTFOLIOS, FETCH_PORTFOLIO } from '../actions/portfolio_actions';
import initialState from '../data/porfolios';


export default (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  // debugger
  switch (action.type) {
    case FETCH_PORTFOLIOS: 
      nextState = merge({}, state, action.portfolios);
      return nextState;
    case FETCH_PORTFOLIO:
      nextState = merge({}, state, { [action.portfolio.id]: action.portfolio } );
      return nextState;
    default:
      return state;
  }
};