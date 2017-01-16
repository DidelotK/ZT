import * as C from '../../constants/series';

function sortingInProgress() {
  return {
    type: C.SERIES_SORTING
  };
}

function sortingFail(err) {
  return {
    type: C.SERIES_SORTED_FAIL,
    payload: err
  };
}
export function sortSeries(series) {
  return dispatch => {
    if (!series) {
      return dispatch(sortingFail('No series'));
    }
    dispatch(sortingInProgress());
    series.sort((a, b) => {
      return (a.addedAt >= b.addedAt)
    }).reverse();
    dispatch({
      type: C.SERIES_SORTED
    });
    return series;
  }
}