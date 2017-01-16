import * as C from '../constants/episodes';

const initialState = {
  episodes: [],
  isCreating: false,
  error: null
};

const episodes = (state = initialState, action) => {
  switch (action.type) {
    // CREATE EPISODE
    case C.EPISODE_CREATE: {
      return {
        ...state,
        isCreating: true
      };
    }
    case C.EPISODE_CREATE_SUCCESS: {
      const episodes = [...state.episodes, action.payload];
      return {
        ...state,
        isCreating: false,
        episodes,
        error: null
      };
    }
    case C.EPISODE_CREATE_ERROR: {
      return {
        ...state,
        isCreating: false,
        error: action.payload
      };
    }
    default:
      return {...state};
  }
};

export default episodes;
