import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({
  keyForAttribute: 'camelCase'
});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const FilmSerializer = {
  serialize(data) {
    return new Serializer('film', {
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
