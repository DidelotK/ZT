import {
  FILMS_FETCH,
  FILMS_FULFILLED,
  FILMS_ERROR,
  FILMS_SORTING,
  FILMS_SORTED
} from '../constants/films';

const initialState = {
  films: null,
  filter: null,
  isFetching: false,
  isSorting: false,
  isAvailable: function () {
    return !(this.isSorting || this.isFetching);
  }
};

const films = (state = initialState, action) => {
  switch (action.type) {
    case FILMS_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FILMS_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        films: action.payload,
        error: null
      };
    }
    case FILMS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    case FILMS_SORTING: {
      return {
        ...state,
        isSorting: true
      };
    }
    case FILMS_SORTED: {
      return {
        ...state,
        films: action.payload,
        isSorting: false
      };
    }
    default:
      return {...state};
  }
};

export default films;