import {FilmSerializer} from '../../serializers/film';
import * as api from '../api';
import * as C from '../../constants/films';

function createInProgress() {
  return {
    type: C.FILM_CREATE
  };
}

function createSuccess(film) {
  return {
    type: C.FILM_CREATE_SUCCESS,
    payload: film
  };
}

function createError(error) {
  return {
    type: C.FILM_CREATE_ERROR,
    payload: error
  };
}

export function createFilm(film) {
  return dispatch => {
    dispatch(createInProgress());
    film = {
      ...film,
      actors: film.actors.split(/\r?\n/).filter(actor => actor !== ''),
      addedAt: Date.now()
    };
    const data = FilmSerializer.serialize(film);
    delete data.data.id;
    return api.postRessource('films', data)
      .then(res => {
        film.id = res.data.data.id;
        dispatch(createSuccess(film));
        return film;
      })
      .catch(err => {
        dispatch(createError(err));
        return null;
      });
  };
}
