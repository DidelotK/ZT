import {SerieSerializer} from '../../serializers/serie';
import * as api from '../api';
import * as C from '../../constants/series';

function updateInProgress() {
  return {
    type: C.SERIE_UPDATE
  };
}

function updateSuccess(serie) {
  return {
    type: C.SERIE_UPDATE_SUCCESS,
    payload: serie
  };
}

function updateError(error) {
  return {
    type: C.SERIE_UPDATE_ERROR,
    payload: error
  };
}

export function updateSerie(serie) {
  return dispatch => {
    dispatch(updateInProgress());
    const serieRecord = {
      ...serie,
      actors: serie.actors.split(/\r?\n/).filter(actor => {
        return actor !== '';
      })
    };
    const data = SerieSerializer.serialize(serieRecord);
    return api.updateRessource('series', data)
      .then(() => {
        dispatch(updateSuccess(serie));
        return serie;
      })
      .catch(err => {
        dispatch(updateError(err));
        return null;
      });
  };
}
