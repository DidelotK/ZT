import {SerieSerializer} from '../../serializers/serie';
import * as api from '../api';
import * as C from '../../constants/series';

export function updateSerie(serie) {
  return dispatch => {
    dispatch({type: C.SERIE_UPDATE});
    const serieRecord = {
      ...serie,
      actors: serie.actors.split(/\r?\n/).filter(actor => {return actor !== ''})
    };
    const data = SerieSerializer.serialize(serieRecord);
    return api.updateRessource('series', data)
      .then(() => {
        dispatch({
          type: C.SERIE_UPDATE_SUCCESS,
          payload: serie
        });
        return serie;
      })
      .catch(err => {
        dispatch({
          type: C.SERIE_UPDATE_ERROR,
          payload: err.error
        });
      });
  }
}
