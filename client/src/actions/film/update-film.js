import {FilmSerializer} from '../../serializers/film';
import * as api from '../api';
import * as C from '../../constants/film';

export function updateFilm(film) {
  return dispatch => {
    dispatch({type: C.FILM_UPDATE});
    const filmRecord = {
      ...film,
      actors: film.actors.split(/\r?\n/)
    };
    const data = FilmSerializer.serialize(filmRecord);
    console.log(data);
    return api.updateRessource('films', data)
      .then(() => {
        dispatch({
          type: C.FILM_UPDATE_SUCCESS,
          payload: film
        });
        return film;
      })
      .catch(err => {
        dispatch({
          type: C.FILM_UPDATE_ERROR,
          payload: err.error
        });
      });
  }
}
