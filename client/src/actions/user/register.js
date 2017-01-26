import {push} from 'react-router-redux';

import * as api from '../api';
import * as C from '../../constants/user';
import CONFIG from '../../../config/default.json';

function registerInProgress() {
  return {
    type: C.REGISTER_REQUEST
  };
}

function registerSuccess(user) {
  return {
    type: C.REGISTER_ACCEPTED,
      payload: user
  };
}

function registerError(error) {
  return {
    type: C.REGISTER_REJECTED,
    payload: error
  };
}

export function register(creds) {
  return dispatch => {
    dispatch(registerInProgress());
    return api.register(creds)
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch(registerSuccess(res.data));
        dispatch(push(CONFIG.redirectRouteAfterLogin));
      })
      .catch(() => {
        dispatch(registerError('Email already taken'));
      });
  };
}
