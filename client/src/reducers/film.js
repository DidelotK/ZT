import {
  FILM_FETCH,
  FILM_FULFILLED,
  FILM_ERROR
} from '../constants/film';

const initialState = {
  film: null,
  isFetching: false,
  error: null
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case FILM_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FILM_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        film: action.payload,
        error: null
      };
    }
    case FILM_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    default:
      return {...state};
  }
};

export default film;
