import * as C from '../constants/episodes';

const initialState = {
  episodes: [],
  isFetching: false,
  isCreating: false,
  isDeleting: false,
  error: null
};

const episodes = (state = initialState, action) => {
  switch (action.type) {
    // FETCH EPISODES
    case C.EPISODES_FETCH: {
      return {
        ...state,
        isFetching: true
      };
    }
    case C.EPISODES_FULFILLED: {
      const episodesId = state.episodes.map(episode => episode.id);

      const episodes = state.episodes.slice(0);
      if (action.payload) {
        action.payload.forEach(episode => {
          if (episodesId.indexOf(episode.id) === -1) {
            episodes.push(episode);
          }
        });
      }
      return {
        ...state,
        isFetching: false,
        episodes,
        error: null
      };
    }
    case C.EPISODES_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
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
    // DELETE EPISODE
    case C.EPISODE_DELETE: {
      return {
        ...state,
        isDeleting: true
      };
    }
    case C.EPISODE_DELETE_SUCCESS: {
      const episodes = state.films.filter(episode => {
        return episode.id !== action.payload;
      });
      return {
        ...state,
        episodes,
        isDeleting: false,
        error: null
      };
    }
    case C.EPISODE_DELETE_ERROR: {
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

export default episodes;
