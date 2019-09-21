import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  // const preloadedState = portfolios;
  // let store = configureStore(preloadedState);

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END
  
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
