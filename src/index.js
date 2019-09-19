import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END
  
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
});
