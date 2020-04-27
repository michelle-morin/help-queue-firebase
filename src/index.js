import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './reducers/ticket-list-reducer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
