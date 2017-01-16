import {EpisodeSerializer} from '../../serializers/episode';
import {SerieSerializer} from '../../serializers/serie';
import * as api from '../api';
import * as C from '../../constants/episodes';
import * as C2 from '../../constants/series';

function episodeCreate() {
  return {
    type: C.EPISODE_CREATE
  };
}

export function createEpisode(episode) {
  return dispatch => {
    const {serie} = episode;
    delete episode.serie;
    dispatch(episodeCreate());
    const episodeSerialized = EpisodeSerializer.serialize(episode);
    const serieSerialized = SerieSerializer.serialize(serie);
    let serieUpdate = false;
    delete episodeSerialized.data.id;
    return api.postRessource('episodes', episodeSerialized)
      .then(res => {
        const savedEpisode = res.data;
        episode.id = savedEpisode.data.id;
        if (!serieSerialized.data.relationships.episodes ||
          !serieSerialized.data.relationships.episodes.data) {
          serieSerialized.data.relationships.episodes = {};
          serieSerialized.data.relationships.episodes.data = [];
        }
        serieSerialized.data.relationships.episodes.data.push({
          type: 'episodes',
          id: savedEpisode.data.id
        });
        dispatch({
          type: C.EPISODE_CREATE_SUCCESS,
          payload: episode
        });
        dispatch({
          type: C2.SERIE_UPDATE
        });
        serieUpdate = true;
        return api.updateRessource('series', serieSerialized);
      })
      .then(serie => {
        dispatch({
          type: C2.SERIE_UPDATE_SUCCESS,
          payload: serie
        });
        return episode;
      })
      .catch(err => {
        if (serieUpdate) {
          dispatch({
            type: C2.SERIE_UPDATE_ERROR,
            payload: err.error
          });
        } else {
          dispatch({
            type: C.EPISODE_CREATE_ERROR,
            payload: err.error
          });
        }
        return null;
      });
  }
}
