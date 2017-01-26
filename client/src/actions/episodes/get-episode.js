import {EpisodeSerializer} from '../../serializers/episode';
import * as api from '../api';
import * as C from '../../constants/episodes';

function fetchInProgress() {
  return {
    type: C.EPISODE_FETCH
  };
}

function fetchFulfilled(episode) {
  return {
    type: C.EPISODE_FULFILLED,
    payload: episode
  };
}

function fetchError(error) {
  return {
    type: C.EPISODE_ERROR,
    payload: error
  };
}

function cleanEpisode(episode) {
  episode.downloadLinks = episode.downloadLinks.filter(link => {
    return link;
  });
  if (!episode.downloadLinks.length) {
    episode.downloadLinks = null;
  }
  return episode;
}

export function getEpisode(filter) {
  return dispatch => {
    let episodes;
    dispatch(fetchInProgress());
    return api.getRessource('episodes', filter, 'downloadLinks')
      .then(res => {
        episodes = res.data;
        return EpisodeSerializer.deserialize(episodes);
      })
      .then(episodesDeserialized => {
        const episode = cleanEpisode(episodesDeserialized[0]);
        dispatch(fetchFulfilled(episode));
        return episode;
      })
      .catch(err => {
        dispatch(fetchError(err));
        return null;
      });
  };
}
