import * as api from '../api';
import * as C from '../../constants/films';
import {getFilm} from './get-film';

function deleteSuccess(dispatch, film) {
  dispatch({
    type: C.FILM_DELETE_SUCCESS,
    payload: film
  });
  return 'OK';
}

export function deleteFilm(_id) {
  return dispatch => {
    let film;
    const filter = {simple: {_id}};
    return dispatch(getFilm(filter))
      .then(_film => {
        film = _film;
        if (!film) {
          return dispatch({type: C.FILM_DELETE_ERROR});
        }
        dispatch({type: C.FILM_DELETE});
        return api.deleteRessource('films', film.id)
      })
      .then(() => {
        if (!film.downloadLinks || !film.downloadLinks.length) {
          return Promise.resolve();
        }
        const linksId = film.downloadLinks.map(link => {
          return link.id;
        });
        if (!linksId || !linksId.length) {
          return Promise.resolve();
        }
        const linksPromise = [];
        linksId.forEach(linkId => {
          const promise = api.deleteRessource('links', linkId);
          linksPromise.push(promise);
        });
        return Promise.all(linksPromise);
      })
      .then(() => {
        return deleteSuccess(dispatch, film);
      })
      .catch(err => {
        dispatch({
          type: C.FILM_DELETE_ERROR,
          payload: err.error
        });
        return null;
      });
  }
}
