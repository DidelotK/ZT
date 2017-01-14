import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({
  keyForAttribute: 'camelCase'
});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const FilmSerializer = {
  serialize(data) {
    return new Serializer('films', {
      keyForAttribute: 'camelCase',
      attributes: [
        'name',
        'description',
        'posterLink',
        'productionDate',
        'actors',
        'director',
        'country',
        'length',
        'addedAt',
        'downloadLinks'
      ]
    }).serialize(data);
  },
  deserialize(data) {
    return _Deserializer
      .deserialize(data);
  }
};
