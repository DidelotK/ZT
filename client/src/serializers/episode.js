import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({keyForAttribute: 'camelCase'});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const EpisodeSerializer = {
  serialize(data) {
    return new Serializer('episodes', {
      keyForAttribute: 'camelCase',
      attributes: [
        'saison',
        'number',
        'name',
        'resume',
        'downloadLinks',
        'uploader'
      ],
      typeForAttribute: function (attribute, data) {
        // sometimes this returns undefined
        return data.customType;
      },
      downloadLinks: {
        ref: 'id',
        included: false
      },
      uploader: {
        ref: 'id',
        included: false
      }
    }).serialize(data);
  },
  deserialize(data) {
    return _Deserializer
      .deserialize(data);
  }
};
