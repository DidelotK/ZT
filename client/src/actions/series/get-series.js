import * as api from '../api';
import * as C from '../../constants/series';
import {SerieSerializer} from '../../serializers/serie';

function fetchSeries() {
  return {
    type: C.SERIES_FETCH
  }
}

export function getSeries() {
  return dispatch => {
    dispatch(fetchSeries());
    return api.getRessource('series')
      .then(res => {
        const series = {
          "data": res.data.data
        };
        return SerieSerializer.deserialize(series);
      })
      .then(series => {
        dispatch({
          type: C.SERIES_FULFILLED,
          payload: series
        });
        return series;
      })
      .catch(err => {
        dispatch({
          type: C.SERIES_ERROR,
          payload: err.error
        });
        return null;
      });
  }
}
