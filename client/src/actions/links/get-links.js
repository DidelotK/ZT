import Promise from 'bluebird';

import * as api from '../api';

export function getLinks(links) {
  if (!links || !links.length) {
    return Promise.resolve(null);
  }
  console.log(links);
  const filter = {simple: {_id: links}};
  return api.getRessource('links', filter)
    .then(res => {
      return res.data.data;
    });
}
