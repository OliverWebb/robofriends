import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createLogger, applyMiddleWare } from 'redux-logger';
import './index.css';
import App from './containers/App';
import { searchRobots } from './reducers';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleWare(logger));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('root'));

serviceWorker.unregister();
