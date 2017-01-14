import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({keyForAttribute: 'camelCase'});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const LinkSerializer = {
  serialize(data) {
    return new Serializer('links', {
      keyForAttribute: 'camelCase',
      attributes: [
        'host',
        'link',
        'quality',
        'language',
        'uploader'
      ]
    }).serialize(data);
  },
  deserialize(data) {
    return _Deserializer
      .deserialize(data);
  }
};
