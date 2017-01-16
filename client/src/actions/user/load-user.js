import * as api from '../api';
import * as C from '../../constants/user';

function fetchUser() {
  return {
    type: C.USER_LOADING
  }
}

export function loadUser(token) {
  return dispatch => {
    dispatch(fetchUser());
    const filter = {simple: {token}};
    return api.getRessource('users', filter)
      .then(res => {
        const user = res.data.data[0].attributes;
        dispatch({
          type: C.USER_LOADED_OK,
          payload: user
        });
        return user;
      })
      .catch(err => {
        dispatch({
          type: C.USER_LOADED_KO,
          payload: err
        });
        return null;
      });
  }
}
