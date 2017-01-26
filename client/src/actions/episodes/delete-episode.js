import * as api from '../api';
import * as C from '../../constants/episodes';
import {getEpisode} from './get-episode';
import {deleteLink} from '../links/delete-link';

function deleteInProgress() {
  return {
    type: C.EPISODE_DELETE
  };
}

function deleteSuccess(episodeId) {
  return {
    type: C.EPISODE_DELETE_SUCCESS,
    payload: episodeId
  };
}

function deleteError(error) {
  return {
    type: C.EPISODE_DELETE_ERROR,
    payload: error
  };
}

export function deleteEpisode(_id) {
  return dispatch => {
    let episode;
    const filter = {simple: {_id}};
    return getEpisode(filter)
      .then(episode => {
        dispatch(deleteInProgress());
        return api.deleteRessource('episodes', episode.id);
      })
      .then(() => {
        if (!episode.downloadLinks || !episode.downloadLinks.length) {
          return Promise.resolve();
        }
        const linksId = episode.downloadLinks.map(link => {
          return link.id;
        });
        if (!linksId || !linksId.length) {
          return Promise.resolve();
        }
        const linksPromise = [];
        linksId.forEach(linkId => {
          const promise = dispatch(deleteLink(linkId));
          linksPromise.push(promise);
        });
        return Promise.all(linksPromise);
      })
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
