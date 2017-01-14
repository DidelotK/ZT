import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
// import createLogger from 'redux-logger';

import reducer from './reducers';

const middleware = applyMiddleware(
  // createLogger({collapsed: true}),
  routerMiddleware(browserHistory),
  thunk
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers(middleware));
