import * as C from '../constants/series';

const initialState = {
  series: null,
  isFetching: false,
  isSorting: false,
  isCreating: false,
  isUpdating: false
};

const series = (state = initialState, action) => {
  switch (action.type) {
    // FETCH SERIES
    case C.SERIES_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case C.SERIES_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        series: action.payload,
        error: null
      };
    }
    case C.SERIES_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    // SORT SERIES
    case C.SERIES_SORTING: {
      return {
        ...state,
        isSorting: true
      };
    }
    case C.SERIES_SORTED: {
      return {
        ...state,
        isSorting: false,
        error: null
      };
    }
    case C.SERIES_SORTED_FAIL: {
      return {
        ...state,
        isSorting: false,
        error: action.payload
      }
    }
    // CREATE SERIE
    case C.SERIE_CREATE: {
      return {
        ...state,
        isCreating: true
      };
    }
    case C.SERIE_CREATE_SUCCESS: {
      return {
        ...state,
        isCreating: false,
        series: state.series.push(action.payload),
        error: null
      };
    }
    case C.SERIE_CREATE_ERROR: {
      return {
        ...state,
        isCreating: false,
        error: action.payload
      };
    }
    // UPDATE SERIE
    case C.SERIE_UPDATE: {
      return {
        ...state,
        isUpdating: true
      };
    }
    case C.SERIE_UPDATE_SUCCESS: {
      const series = state.series.map(serie => {
        if (serie.id === action.payload.id) {
          return action.payload;
        }
        return serie;
      });
      return {
        ...state,
        series,
        isUpdating: false,
        error: null
      };
    }
    case C.SERIE_UPDATE_ERROR: {
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      };
    }
    // FETCH SERIE
    case C.SERIE_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case C.SERIE_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        error: null
      };
    }
    case C.SERIE_ERROR: {
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

export default series;
