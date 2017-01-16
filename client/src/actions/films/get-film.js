import {FilmSerializer} from '../../serializers/film';
import * as api from '../api';
import * as C from '../../constants/films';

function fetchFilm() {
  return {
    type: C.FILM_FETCH
  }
}

function cleanFilm(film) {
  film.downloadLinks = film.downloadLinks.filter(link => {
    return link;
  });
  if (!film.downloadLinks.length) {
    film.downloadLinks = null;
  }
  return film;
}

function filmsDeserialize(dispatch, films, links) {
  if (films && links && links.data && links.included) {
    films.included = films.included.concat(links.data);
    films.included = films.included.concat(links.included);
  }
  return FilmSerializer.deserialize(films)
    .then(filmsDeserialized => {
      const film = cleanFilm(filmsDeserialized[0]);
      dispatch({
        type: C.FILM_FULFILLED,
        payload: film
      });
      return film;
    })
}

function getFilmLinks(films) {
  const linksId = films.data[0].relationships.downloadLinks.data.map(link => {
    return link.id;
  });
  if (!linksId || !linksId.length) {
    return Promise.resolve();
  }
  const filterLink = {simple: {_id: {$in: linksId}}};
  return api.getRessource('links', filterLink, 'uploader');
}

export function getFilm(filter) {
  return dispatch => {
    let films;
    let links;
    dispatch(fetchFilm());
    return api.getRessource('films', filter, 'uploader')
      .then(res => {
        films = res.data;
        if (!films || !films.data[0]) {
          return filmsDeserialize(dispatch, null, null);
        }
        return getFilmLinks(films)
          .then(res => {
            if (res && res.data)  {
              links = res.data;
            }
            return filmsDeserialize(dispatch, films, links);
          });
      })
      .catch(err => {
        dispatch({
          type: C.FILM_ERROR,
          payload: err.error
        });
        return null;
      });
  }
}
