import {FilmSerializer} from '../../serializers/film';
import * as api from '../api';
import * as C from '../../constants/film';

function fetchFilm() {
  return {
    type: C.FILM_FETCH
  }
}

export function getFilm(filter) {
  return dispatch => {
    let include = 'uploader,downloadLinks';
    dispatch(fetchFilm());
    return api.getRessource('films', filter, include)
      .then(res => {
        return FilmSerializer.deserialize(res.data);
      })
      .then(filmsDeserialized => {
        console.log(filmsDeserialized);
        dispatch({
          type: C.FILM_FULFILLED,
          payload: filmsDeserialized[0]
        });
        return filmsDeserialized[0];
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
