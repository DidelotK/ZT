import axios from 'axios';
import Qs from 'qs';
import Promise from 'bluebird';

import CONFIG from '../../config/default.json';

export function queryLinks(links) {
  if (!links || !links.length) {
    return Promise.resolve(null);
  }
  const filter = {id: links};
  return axios({
    url: `${CONFIG['apiUrl']}/links`,
    timeout: 20000,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      filter
    },
    paramsSerializer: params => {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    responseType: 'json'
  })
    .then(res => {
      return res.data.data;
    });
}