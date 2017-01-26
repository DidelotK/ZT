import * as api from '../api';
import * as C from '../../constants/series';
import {SerieSerializer} from '../../serializers/serie';

function fetchInProgress() {
  return {
    type: C.SERIES_FETCH
  };
}

function fetchSuccess(series) {
  return {
    type: C.SERIES_FULFILLED,
    payload: series
  };
}

function fetchError(error) {
  return {
    type: C.SERIES_ERROR,
    payload: error
  };
}

export function getSeries(filter) {
  return dispatch => {
    dispatch(fetchInProgress());
    return api.getRessource('series', filter)
      .then(res => {
        const series = {
          data: res.data.data
        };
        return SerieSerializer.deserialize(series);
      })
      .then(series => {
        dispatch(fetchSuccess(series));
        return series;
      })
      .catch(err => {
        dispatch(fetchError(err));
        return null;
      });
  };
}
