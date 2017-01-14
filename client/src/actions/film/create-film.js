import {FilmSerializer} from '../../serializers/film';
import * as api from '../api';
import * as C from '../../constants/film';

function filmCreate() {
  return {
    type: C.FILM_CREATE
  }
}

export function createFilm(film) {
  return dispatch => {
    dispatch(filmCreate());
    const filmRecord = {
      ...film,
      actors: film.actors.split(/\r?\n/)
    };
    const data = FilmSerializer.serialize(filmRecord);
    delete data.data.id;
    return api.postRessource('films', data)
      .then(() => {
        dispatch({
          type: C.FILM_CREATE_SUCCESS,
          payload: film
        });
        return film;
      })
      .catch(err => {
        dispatch({
          type: C.FILM_CREATE_ERROR,
          payload: err.error
        });
      });
  }
}
