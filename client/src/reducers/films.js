import * as C from '../constants/films';

const initialState = {
  films: [],
  isFetching: false,
  isSorting: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false
};

const films = (state = initialState, action) => {
  switch (action.type) {
    // FETCH FILMS
    case C.FILMS_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case C.FILMS_FULFILLED: {
      const filmsId = state.films.map(film => film.id);

      const films = state.films.slice(0);
      if (action.payload) {
        action.payload.forEach(film => {
          if (filmsId.indexOf(film.id) === -1) {
            films.push(film);
          }
        });
      }
      return {
        ...state,
        isFetching: false,
        films,
        error: null
      };
    }
    case C.FILMS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    // SORT FILMS
    case C.FILMS_SORTING: {
      return {
        ...state,
        isSorting: true
      };
    }
    case C.FILMS_SORTED: {
      return {
        ...state,
        isSorting: false,
        error: null
      };
    }
    case C.FILMS_SORTED_FAIL: {
      return {
        ...state,
        isSorting: false,
        error: action.payload
      };
    }
    // CREATE FILM
    case C.FILM_CREATE: {
      return {
        ...state,
        isCreating: true
      };
    }
    case C.FILM_CREATE_SUCCESS: {
      const films = [...state.films, action.payload];
      return {
        ...state,
        isCreating: false,
        films,
        error: null
      };
    }
    case C.FILM_CREATE_ERROR: {
      return {
        ...state,
        isCreating: false,
        error: action.payload
      };
    }
    // UPDATE FILM
    case C.FILM_UPDATE: {
      return {
        ...state,
        isUpdating: true
      };
    }
    case C.FILM_UPDATE_SUCCESS: {
      const films = state.films.map(film => {
        if (film.id === action.payload.id) {
          for(let k in action.payload) {
            if(action.payload.hasOwnProperty(k)) {
              film[k]=action.payload[k];
            }
          }

        }
        return film;
      });
      return {
        ...state,
        films,
        isUpdating: false,
        error: null
      };
    }
    case C.FILM_UPDATE_ERROR: {
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      };
    }
    // DELETE FILM
    case C.FILM_DELETE: {
      return {
        ...state,
        isDeleting: true
      };
    }
    case C.FILM_DELETE_SUCCESS: {
      const films = state.films.filter(film => {
        return film.id !== action.payload;
      });
      return {
        ...state,
        films,
        isDeleting: false,
        error: null
      };
    }
    case C.FILM_DELETE_ERROR: {
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    }
    // FETCH FILM
    case C.FILM_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case C.FILM_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        error: null
      };
    }
    case C.FILM_ERROR: {
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

export default films;
