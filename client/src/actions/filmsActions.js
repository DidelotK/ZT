import axios from 'axios';
import Qs from 'qs';
import CONFIG from '../../config/default.json';
import {
  FILMS_FETCH,
  FILMS_FULFILLED,
  FILMS_ERROR,
  FILMS_SORTING,
  FILMS_SORTED
} from '../constants/films';

function filmsFetch() {
  return {
    type: FILMS_FETCH
  }
}

export function queryFilms(filter) {
  return dispatch => {
    dispatch(filmsFetch())
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
        dispatch({
          type: FILMS_FULFILLED,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: FILMS_ERROR,
          payload: err.error
        });
      });
  }
}

function sortingInProgress() {
  return {
    type: FILMS_SORTING
  }
}
export function sortFilms(films) {
  return dispatch => {
    dispatch(sortingInProgress());
    console.log(films);
    films.sort((a, b) => {
      return a.attributes.addedAt < b.attributes.addedAt
    });
    dispatch({
      type: FILMS_SORTED,
      payload: films
    });
  }
}
