import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({keyForAttribute: 'camelCase'});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const SerieSerializer = {
  serialize(data) {
    return new Serializer('series', {
      keyForAttribute: 'camelCase',
      attributes: [
        'name',
        'description',
        'posterLink',
        'productionDate',
        'director',
        'actors',
        'country',
        'addedAt',
        'list-episodes',
        'episodes',
        'uploader'
      ],
      typeForAttribute: function (attribute, data) {
        // sometimes this returns undefined
        return data.customType;
      },
      episodes: {
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
    return new _Deserializer
      .deserialize(data);
  }
};
