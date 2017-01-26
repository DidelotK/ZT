import * as api from '../api';
import * as C from '../../constants/user';

function loadInProgress() {
  return {
    type: C.USER_LOADING
  };
}

function loadSuccess(user) {
  return {
    type: C.USER_LOADED_OK,
    payload: user
  };
}

function loadError(error) {
  return {
    type: C.USER_LOADED_KO,
    payload: error
  };
}

export function loadUser(token) {
  return dispatch => {
    dispatch(loadInProgress);
    const filter = {simple: {token}};
    return api.getRessource('users', filter)
      .then(res => {
        const user = res.data.data[0].attributes;
        dispatch(loadSuccess(user));
        return user;
      })
      .catch(err => {
        dispatch(loadError(err));
        return null;
      });
  };
}
