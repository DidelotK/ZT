import {push} from 'react-router-redux';

import * as api from '../api';
import * as C from '../../constants/user';
import CONFIG from '../../../config/default.json';

function loginInProgress() {
  return {
    type: C.LOGIN_REQUEST
  };
}

function loginSuccess(user) {
  return {
    type: C.LOGIN_ACCEPTED,
    payload: user
  };
}

function loginError() {
  return {
    type: C.LOGIN_REJECTED,
    payload: 'Wrong credentials'
  };
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(loginInProgress());
    return api.login(creds)
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch(loginSuccess(res.data));
        dispatch(push(CONFIG.redirectRouteAfterLogin));
      })
      .catch(() => {
        dispatch(loginError());
      });
  };
}

function checkAuthInProgress() {
  return {
    type: C.CHECK_AUTH
  };
}

function checkAuthSuccess(user) {
  return {
    type: C.CHECK_AUTH_OK,
    payload: user
  };
}

function checkAuthError() {
  return {
    type: C.CHECK_AUTH_KO
  };
}

export function checkAuth() {
  return dispatch => {
    dispatch(checkAuthInProgress());

    const token = localStorage.token;
    if (!token) {
      dispatch(checkAuthError());
      return Promise.resolve();
    }
    return api.authenticate(token)
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch(checkAuthSuccess(res.data));
      })
      .catch(() => {
        dispatch(checkAuthError());
      });
  };
}

export function logout() {
  return dispatch => {
    delete localStorage.token;
    dispatch({type: C.LOGOUT});
    dispatch(push(CONFIG.redirectRouteAfterLogout));
  };
}
