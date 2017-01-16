import * as api from '../api';
import * as C from '../../constants/series';
import {getSerie} from './get-serie';

function deleteSuccess(dispatch, serie) {
  dispatch({
    type: C.SERIE_DELETE_SUCCESS,
    payload: serie
  });
  return 'OK';
}

export function deleteSerie(_id) {
  return dispatch => {
    let serie;
    const filter = {simple: {_id}};
    return dispatch(getSerie(filter))
      .then(_serie => {
        serie = _serie;
        if (!serie) {
          return dispatch({type: C.SERIE_DELETE_ERROR});
        }
        dispatch({type: C.SERIE_DELETE});
        console.log(serie);
        return api.deleteRessource('series', serie.id)
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
          const promise = api.deleteRessource('episodes', episodeId);
          episodesPromise.push(promise);
        });
        return Promise.all(episodesPromise);
      })
      .then(() => {
        return deleteSuccess(dispatch, serie);
      })
      .catch(err => {
        dispatch({
          type: C.SERIE_DELETE_ERROR,
          payload: err.error
        });
        return null;
      });
  }
}
