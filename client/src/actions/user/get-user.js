import * as api from '../api';
import * as C from '../../constants/user';

function fetchUser() {
  return {
    type: C.USER_FETCH
  }
}

export function getUser(filter) {
  return dispatch => {
    dispatch(fetchUser());
    return api.getRessource('users', filter)
      .then(res => {
        const user = res.data.data[0];
        dispatch({
          type: C.USER_FULFILLED
        });
        return user;
      })
      .catch(() => {
        dispatch({
          type: C.USER_ERROR
        });
        return null;
      });
  }

}
