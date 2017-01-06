import axios from 'axios';
import Qs from 'qs';

import CONFIG from '../../config/default.json';
import {
 FILM_FETCH,
 FILM_FULFILLED,
 FILM_ERROR
} from '../constants/film';
import {queryLinks} from './links';

function filmFetch() {
  return {
    type: FILM_FETCH
  }
}
export function fetchFilm(_id) {
  let film = null;
  const filter = {simple: {_id}};
  return dispatch => {
    dispatch(filmFetch());
    return axios({
      url: `${CONFIG['apiUrl']}/films`,
      timeout: 20000,
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        filter
      },
      paramsSerializer: params => {
        return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
      responseType: 'json'
    })
      .then(res => {
        const films = res.data.data;
        film = films[0];
        const links = film.relationships.downloadLinks.data.map(link => {
          return link.id;
        });
        return queryLinks(links);
      })
      .then(res => {
        film.relationships.downloadLinks = {
          ...film.relationships.downloadLinks,
          data: res
        };
        dispatch({
          type: FILM_FULFILLED,
          payload: film
        });
      })
      .catch(err => {
        dispatch({
          type: FILM_ERROR,
          payload: err.error
        });
      });
  }
}