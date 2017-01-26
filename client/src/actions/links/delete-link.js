import * as api from '../api';
import * as C from '../../constants/links';

function deleteInProgress() {
  return {
    type: C.LINK_DELETE
  };
}

function deleteSuccess(linkId) {
  return {
    type: C.LINK_DELETE_SUCCESS,
    payload: linkId
  };
}

function deleteError(error) {
  return {
    type: C.LINK_DELETE_ERROR,
    payload: error
  };
}

export function deleteLink(_id) {
  return dispatch => {
    dispatch(deleteInProgress());
    return api.deleteRessource('links', _id)
      .then(() => {
        dispatch(deleteSuccess(_id));
        return 'DELETED';
      })
      .catch(err => {
        dispatch(deleteError(err));
        return null;
      });
  };
}
