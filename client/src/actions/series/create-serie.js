import {SerieSerializer} from '../../serializers/serie';
import * as api from '../api';
import * as C from '../../constants/series';

function createInProgress() {
  return {
    type: C.SERIE_CREATE
  };
}

function createSuccess(serie) {
  return {
    type: C.SERIE_CREATE_SUCCESS,
    payload: serie
  };
}

function createError(error) {
  return {
    type: C.SERIE_CREATE_ERROR,
    payload: error
  };
}

export function createSerie(serie) {
  return dispatch => {
    dispatch(createInProgress());
    const serieRecord = {
      ...serie,
      actors: serie.actors.split(/\r?\n/).filter(actor =>  actor !== ''),
      addedAt: Date.now()
    };
    const data = SerieSerializer.serialize(serieRecord);
    delete data.data.id;
    return api.postRessource('series', data)
      .then(res => {
        serie.id = res.data.data.id;
        dispatch(createSuccess(serie));
        return serie;
      })
      .catch(err => {
        dispatch(createError(err));
        return null;
      });
  };
}
