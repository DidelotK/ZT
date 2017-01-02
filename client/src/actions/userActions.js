import axios from 'axios';
import {push} from 'react-router-redux';

import CONFIG from '../../config/default.json';
import {
  LOGIN_REQUEST,
  LOGIN_ACCEPTED,
  LOGIN_REJECTED,
  CHECK_AUTH,
  CHECK_AUTH_OK,
  CHECK_AUTH_KO,
  LOGOUT
} from '../constants/user';

function loginRequets() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginUser(creds) {
  return dispatch => {
    dispatch(loginRequets());
    return axios({
      url: `${CONFIG['apiUrl']}/users/login`,
      timeout: 20000,
      method: 'post',
      data: creds,
      responseType: 'json'
    })
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch({
          type: LOGIN_ACCEPTED,
          payload: res.data
        });
        dispatch(push(CONFIG['redirectRouteAfterLogin']));
      })
      .catch(err => {
        dispatch({
          type: LOGIN_REJECTED,
          payload: err.error
        });
      });
  }
}

export function checkAuth() {
  return (dispatch) => {
    dispatch({type: CHECK_AUTH});

    const token = localStorage.token;
    if (token === undefined) {
      dispatch({
        type: CHECK_AUTH_KO
      });
      dispatch(push(CONFIG['loginRoute']));
      return;
    }
    return axios({
      url: `${CONFIG['apiUrl']}/users/authenticate`,
      timeout: 20000,
      method: 'post',
      data: {token},
      responseType: 'json'
    })
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch({
          type: CHECK_AUTH_OK,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: CHECK_AUTH_KO
        });
      });
  }
}

export function logout() {
  return (dispatch) => {
    delete localStorage.token;
    dispatch({type: LOGOUT});
    dispatch(push(CONFIG['redirectRouteAfterLogout']));
  }
}
