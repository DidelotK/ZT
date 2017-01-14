import * as api from '../api';
import Promise from 'bluebird';

export function getUsers(usersId) {
  if (!usersId || !usersId.length) {
    return Promise.resolve(null);
  }
  const filter = {id: usersId};
  return api.getRessource('users', filter)
    .then(res => {
      return res.data.data;
    });
}
