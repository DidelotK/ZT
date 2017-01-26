import * as api from '../api';
import * as C from '../../constants/series';
import * as C2 from '../../constants/episodes';
import {EpisodeSerializer} from '../../serializers/episode';

function fetchInProgress() {
  return [
    {
      type: C.SERIE_EPISODES_FETCH
    },
    {
      type: C2.EPISODES_FETCH
    }
  ];
}

function fetchSuccess(episodes) {
  return [
    {
      type: C2.EPISODES_FULFILLED,
      payload: episodes
    },
    {
      type: C.SERIE_EPISODES_FULFILLED
    }
  ];
}

function fetchError(error) {
  return [
    {
      type: C2.EPISODES_ERROR,
      payload: error
    },
    {
      type: C.SERIE_EPISODES_ERROR
    }
  ];
}

export function getSerieEpisode(filter) {
  let series;
  let episodes;
  return dispatch => {
    dispatch(fetchInProgress());
    return api.getRessource('series', filter, 'episodes')
      .then(res => {
        series = res.data;
        if (series) {
          episodes = {data: series.included};
        }
        return EpisodeSerializer.deserialize(episodes);
      })
      .then(episodesDeserialized => {
        dispatch(fetchSuccess(episodesDeserialized));
        return episodesDeserialized;
      })
      .catch(err => {
        dispatch(fetchError(err));
        return null;
      });
  };
}
