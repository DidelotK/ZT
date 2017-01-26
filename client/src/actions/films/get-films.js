import * as api from '../api';
import * as C from '../../constants/films';
import {FilmSerializer} from '../../serializers/film';

function fetchInProgress() {
  return {
    type: C.FILMS_FETCH
  };
}

function fetchFulfilled(films) {
  return {
    type: C.FILMS_FULFILLED,
    payload: films
  };
}

function fetchError(error) {
  return {
    type: C.FILMS_ERROR,
    payload: error
  };
}

export function getFilms(filter) {
  return dispatch => {
    dispatch(fetchInProgress());
    return api.getRessource('films', filter)
      .then(res => {
        const films = {
          data: res.data.data
        };
        return FilmSerializer.deserialize(films);
      })
      .then(films => {
        dispatch(fetchFulfilled(films));
        return films;
      })
      .catch(err => {
        dispatch(fetchError(err));
        return null;
      });
  };
}
