import {SerieSerializer} from '../../serializers/serie';
import * as api from '../api';
import * as C from '../../constants/series';

function serieCreate() {
  return {
    type: C.SERIE_CREATE
  };
}
export function createSerie(serie) {
  return dispatch => {
    dispatch(serieCreate());
    const serieRecord = {
      ...serie,
      actors: serie.actors.split(/\r?\n/).filter(actor => {return actor !== ''})
    };
    console.log(serieRecord);
    const data = SerieSerializer.serialize(serieRecord);
    delete data.data.id;
    console.log(data);
    return api.postRessource('series', data)
      .then(() => {
        dispatch({
          type: C.SERIE_CREATE_SUCCESS,
          payload: serie
        });
        return serie;
      })
      .catch(err => {
        dispatch({
          type: C.SERIE_CREATE_ERROR,
          payload: err.error
        });
        return null;
      });
  }
}