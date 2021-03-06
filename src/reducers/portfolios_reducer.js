import merge from 'lodash/merge';
import { FETCH_PORTFOLIOS } from '../actions/portfolio_actions';
import initialState from '../data/portfolios';


export default (state = initialState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  // debugger
  switch (action.type) {
    case FETCH_PORTFOLIOS: 
      nextState = merge({}, state, action.portfolios);
      return nextState;
    // case FETCH_PORTFOLIO:
    //   let newState = nextState[action.portfolioId];
    //   // debugger
    //    return newState;
      // nextState = merge({}, state, action.portfolioId );
    default:
      return state;
  }
};