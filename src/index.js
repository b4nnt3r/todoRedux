import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import todoApp from './components/reducers'

let store = createStore(todoApp, {
  visibilityFilter: 'SHOW_ALL',
  todos: [{
      text: 'have initial',
      complete: true,
      id: 0
    },
    {
      text: 'have multiple',
      complete: true,
      id: 1
    }
  ]
})

window.store = store

ReactDOM.render(
  <Provider store={store}>
    < App / >
  </Provider> , document.getElementById('root'));
registerServiceWorker();
