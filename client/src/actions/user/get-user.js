import * as api from '../api';
import * as C from '../../constants/user';

function fetchInProgress() {
  return {
    type: C.USER_FETCH
  };
}

function fetchSuccess(user) {
  return {
    type: C.USER_FULFILLED,
    payload: user
  };
}

function fetchError(error) {
  return {
    type: C.USER_ERROR,
    payload: error
  };
}

export function getUser(filter) {
  return dispatch => {
    dispatch(fetchInProgress());
    return api.getRessource('users', filter)
      .then(res => {
        const user = res.data.data[0];
        dispatch(fetchSuccess(user));
        return user;
      })
      .catch(err => {
        dispatch(fetchError(err));
        return null;
      });
  };
}
