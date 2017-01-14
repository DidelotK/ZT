import {push} from 'react-router-redux';

import * as api from '../api';
import * as C from '../../constants/user';
import CONFIG from '../../../config/default.json';

function loginRequets() {
  return {
    type: C.LOGIN_REQUEST
  }
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(loginRequets());
    return api.login(creds)
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch({
          type: C.LOGIN_ACCEPTED,
          payload: res.data
        });
        dispatch(push(CONFIG['redirectRouteAfterLogin']));
      })
      .catch(() => {
        dispatch({
          type: C.LOGIN_REJECTED,
          payload: 'Wrong credentials'
        });
      });
  }
}

export function checkAuth() {
  return dispatch => {
    dispatch({type: C.CHECK_AUTH});

    const token = localStorage.token;
    if (!token) {
      dispatch({
        type: C.CHECK_AUTH_KO
      });
      return Promise.resolve();
    }
    return api.authenticate(token)
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch({
          type: C.CHECK_AUTH_OK,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: C.CHECK_AUTH_KO
        });
      });
  }
}

export function logout() {
  return dispatch => {
    delete localStorage.token;
    dispatch({type: C.LOGOUT});
    dispatch(push(CONFIG['redirectRouteAfterLogout']));
  }
}
