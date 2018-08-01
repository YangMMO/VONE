import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppReducers from './reducers/app';

const store = createStore(AppReducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)