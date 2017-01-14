import {push} from 'react-router-redux';

import * as api from '../api';
import * as C from '../../constants/user';
import CONFIG from '../../../config/default.json';

function registerRequest() {
  return {
    type: C.REGISTER_REQUEST
  }
}
export function register(creds) {
  return dispatch => {
    dispatch(registerRequest());
    return api.register(creds)
      .then(res => {
        localStorage.token = res.data.accessToken;
        dispatch({
          type: C.REGISTER_ACCEPTED,
          payload: res.data
        });
        dispatch(push(CONFIG['redirectRouteAfterLogin']));
      })
      .catch(() => {
        dispatch({
          type: C.REGISTER_REJECTED,
          payload: 'Email already taken'
        })
      });
  }
}