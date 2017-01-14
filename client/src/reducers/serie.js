import {
  SERIE_CREATE,
  SERIE_CREATE_SUCCESS,
  SERIE_CREATE_ERROR,
  SERIE_FETCH,
  SERIE_FULFILLED,
  SERIE_ERROR
} from '../constants/serie';

const initialState = {
  serie: null,
  isFetching: false,
  isCreating: false,
  isAvailable: function () {
    return !(this.isCreating|| this.isFetching);
  },
  error: null
};

const serie = (state = initialState, action) => {
  switch (action.type) {
    case SERIE_CREATE: {
      return {
        ...state,
        isCreating: true
      };
    }
    case SERIE_CREATE_SUCCESS: {
      return {
        ...state,
        isCreating: false,
        serie: action.payload,
        error: null
      };
    }
    case SERIE_CREATE_ERROR: {
      return {
        ...state,
        isCreating: false,
        error: action.payload
      };
    }
    case SERIE_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case SERIE_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        serie: action.payload,
        error: null
      };
    }
    case SERIE_ERROR: {
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

export default serie;
