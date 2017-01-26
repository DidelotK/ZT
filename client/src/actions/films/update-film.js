import {FilmSerializer} from '../../serializers/film';
import * as api from '../api';
import * as C from '../../constants/films';

function updateInProgress() {
  return {
    type: C.FILM_UPDATE
  };
}

function updateSuccess(film) {
  return {
    type: C.FILM_UPDATE_SUCCESS,
    payload: film
  };
}

function updateError(error) {
  return {
    type: C.FILM_UPDATE_ERROR,
    payload: error
  };
}

export function updateFilm(film) {
  return dispatch => {
    dispatch(updateInProgress());
    const filmRecord = {
      ...film,
      actors: film.actors.split(/\r?\n/).filter(actor => {
        return actor !== '';
      })
    };
    const data = FilmSerializer.serialize(filmRecord);
    return api.updateRessource('films', data)
      .then(() => {
        dispatch(updateSuccess(film));
        return film;
      })
      .catch(err => {
        dispatch(updateError(err));
      });
  };
}
