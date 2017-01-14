import * as api from '../api';
import Promise from 'bluebird';

export function getEpisodes(episodesId) {
  if (!episodesId || !episodesId.length) {
    return Promise.resolve(null);
  }
  const filter = {_id: episodesId};
  return api.getRessource('episodes', filter)
    .then(res => {
      return res.data.data;
    });
}
