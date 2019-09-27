import { combineReducers } from 'redux';
import portfolios from './portfolios_reducer';
import counter from './counter_reducer';

export default combineReducers({
  portfolios,
  counter
});