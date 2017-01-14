import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({keyForAttribute: 'camelCase'});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const UserSerializer = {
  serialize(data) {
    return new Serializer('users', {
      keyForAttribute: 'camelCase',
      attributes: [
        'email',
        'pseudo',
        'password'
      ]
    }).serialize(data);
  },
  deserialize(data) {
    return _Deserializer
      .deserialize(data);
  }
};
