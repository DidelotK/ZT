import * as api from '../api';
import * as C from '../../constants/films';
import {FilmSerializer} from '../../serializers/film';

function fetchFilms() {
  return {
    type: C.FILMS_FETCH
  }
}

export function getFilms() {
  return dispatch => {
    dispatch(fetchFilms());
    return api.getRessource('films')
      .then(res => {
        const films = {
          "data": res.data.data
        };
        return FilmSerializer.deserialize(films);
      })
      .then(films => {
        dispatch({
          type: C.FILMS_FULFILLED,
          payload: films
        });
        return films;
      })
      .catch(err => {
        dispatch({
          type: C.FILMS_ERROR,
          payload: err.error
        });
        return null;
      });
  }
}
