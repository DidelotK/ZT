import {EpisodeSerializer} from '../../serializers/episode';
import * as api from '../api';
import * as C from '../../constants/episodes';
import {serieUpdate} from '../series/update-serie';

function createInProgress() {
  return {
    type: C.EPISODE_CREATE
  };
}

function createSuccess(episode) {
  return {
    type: C.EPISODE_CREATE_SUCCESS,
    payload: episode
  };
}

function createError(error) {
  return {
    type: C.EPISODE_CREATE_ERROR,
    payload: error
  };
}

export function createEpisode(episode) {
  return dispatch => {
    dispatch(createInProgress());

    const {serie} = episode;
    delete episode.serie;
    episode = {
      ...episode,
      addedAt: Date.now()
    };
    const episodeSerialized = EpisodeSerializer.serialize(episode);
    delete episodeSerialized.data.id;

    return api.postRessource('episodes', episodeSerialized)
      .then(res => {
        const savedEpisode = res.data;
        episode.id = savedEpisode.data.id;
        if (!serie.episodes) {
          serie.episodes= [];
        }
        serie.episodes.push(savedEpisode.data.id);
        dispatch(createSuccess(episode));
        return dispatch(serieUpdate(serie));
      })
      .then(() => {
        return episode;
      })
      .catch(err => {
        dispatch(createError(err));
        return null;
      });
  };
}
