import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
// import createLogger from 'redux-logger';

import reducer from "./reducers";

const middleware = applyMiddleware(
  // createLogger(),
  routerMiddleware(browserHistory),
  thunk
);

export default createStore(reducer, middleware);;
