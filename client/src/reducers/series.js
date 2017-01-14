import {
  SERIES_FETCH,
  SERIES_FULFILLED,
  SERIES_ERROR,
  SERIES_SORTING,
  SERIES_SORTED,
  SERIES_SORTED_FAIL
} from '../constants/series';

const initialState = {
  series: null,
  isFetching: false,
  isSorting: false,
  isAvailable: function () {
    return !(this.isSorting || this.isFetching);
  }
};

const series = (state = initialState, action) => {
  switch (action.type) {
    case SERIES_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case SERIES_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        series: action.payload,
        error: null
      };
    }
    case SERIES_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    case SERIES_SORTING: {
      return {
        ...state,
        isSorting: true
      };
    }
    case SERIES_SORTED: {
      return {
        ...state,
        series: action.payload,
        isSorting: false
      };
    }
    case SERIES_SORTED_FAIL: {
      return {
        ...state,
        series: null,
        isSorting: false,
        error: action.payload
      }
    }
    default:
      return {...state};
  }
};

export default series;