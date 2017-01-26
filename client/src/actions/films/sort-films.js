import * as C from '../../constants/films';

function sortingInProgress() {
  return {
    type: C.FILMS_SORTING
  };
}

function sortingSuccess() {
  return {
    type: C.FILMS_SORTED
  };
}

function sortingFail(err) {
  return {
    type: C.FILMS_SORTED_FAIL,
    payload: err
  };
}

export function sortFilms(films) {
  return dispatch => {
    if (!films) {
      return dispatch(sortingFail('No films'));
    }
    dispatch(sortingInProgress());
    films.sort((a, b) => {
      return (a.addedAt >= b.addedAt);
    }).reverse();
    dispatch(sortingSuccess());
    return films;
  };
}
