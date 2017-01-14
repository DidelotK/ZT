import {
  FILM_CREATE,
  FILM_CREATE_SUCCESS,
  FILM_CREATE_ERROR,
  FILM_FETCH,
  FILM_FULFILLED,
  FILM_ERROR,
  FILM_RESET
} from '../constants/film';

const initialState = {
  film: null,
  isFetching: false,
  isCreating: false,
  isAvailable: function () {
    return !(this.isCreating|| this.isFetching);
  },
  error: null
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case FILM_CREATE: {
      return {
        ...state,
        isCreating: true
      };
    }
    case FILM_CREATE_SUCCESS: {
      return {
        ...state,
        isCreating: false,
        film: action.payload,
        error: null
      };
    }
    case FILM_CREATE_ERROR: {
      return {
        ...state,
        isCreating: false,
        error: action.payload
      };
    }
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
        film: null,
        isFetching: false,
        error: action.payload
      };
    }
    case FILM_RESET: {
      return initialState;
    }
    default:
      return {...state};
  }
};

export default film;
