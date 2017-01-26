import * as C from '../constants/links';

const initialState = {
  links: [],
  isCreating: false,
  isDeleting: false,
  error: null
};

const links = (state = initialState, action) => {
  switch (action.type) {
    // CREATE LINK
    case C.LINK_CREATE: {
      return {
        ...state,
        isCreating: true
      };
    }
    case C.LINK_CREATE_SUCCESS: {
      const links = [...state.links, action.payload];
      return {
        ...state,
        isCreating: false,
        links,
        error: null
      };
    }
    case C.LINK_CREATE_ERROR: {
      return {
        ...state,
        isCreating: false,
        error: action.payload
      };
    }
    // DELETE LINK
    case C.LINK_DELETE: {
      return {
        ...state,
        isDeleting: true
      };
    }
    case C.LINK_DELETE_SUCCESS: {
      const links = state.films.filter(link => {
        return link.id !== action.payload;
      });
      return {
        ...state,
        links,
        isDeleting: false,
        error: null
      };
    }
    case C.LINK_DELETE_ERROR: {
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      };
    }
    default:
      return {...state};
  }
};

export default links;
