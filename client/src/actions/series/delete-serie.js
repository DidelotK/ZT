import * as api from '../api';
import * as C from '../../constants/series';
import {getSerie} from './get-serie';
import {deleteEpisode} from '../episodes/delete-episode';

function deleteInProgress() {
  return {
    type: C.SERIE_DELETE
  };
}

function deleteSuccess(serieId) {
  return {
    type: C.SERIE_DELETE_SUCCESS,
    payload: serieId
  };
}

function deleteError(error) {
  return {
    type: C.SERIE_DELETE_ERROR,
    payload: error
  };
}

export function deleteSerie(_id) {
  return dispatch => {
    let serie;
    const filter = {simple: {_id}};
    return dispatch(getSerie(filter))
      .then(_serie => {
        serie = _serie;
        if (!serie) {
          return deleteError(dispatch,
            'Impossible to delete non existing serie');
        }
        dispatch(deleteInProgress());
        return api.deleteRessource('series', serie.id);
      })
      .then(() => {
        if (!serie.episodes || !serie.episodes.length) {
          return Promise.resolve();
        }
        const episodesId = serie.episodes.map(episode => {
          return episode.id;
        });
        if (!episodesId || !episodesId.length) {
          return Promise.resolve();
        }
        const episodesPromise = [];
        episodesId.forEach(episodeId => {
          const promise = deleteEpisode(episodeId);
          episodesPromise.push(promise);
        });
        return Promise.all(episodesPromise);
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
