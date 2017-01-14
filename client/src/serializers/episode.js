import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({keyForAttribute: 'camelCase'});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const EpisodeSerializer = {
  serialize(data) {
    return new Serializer('list-episodes', {
      keyForAttribute: 'camelCase',
      attributes: [
        'saison',
        'number',
        'name',
        'resume',
        'downloadLinks'
      ]
    }).serialize(data);
  },
  deserialize(data) {
    return _Deserializer
      .deserialize(data);
  }
};
