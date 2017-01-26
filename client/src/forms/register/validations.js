import {getUser} from '../../actions/user/get-user';

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'email',
    'pseudo',
    'password'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export const asyncValidate = (values, dispatch) => {
  const filter = {simple: {pseudo: values.pseudo}};
  const errors = {};
  return dispatch(getUser(filter))
    .then(user => {
      if (user) {
        errors.pseudo = 'Pseudo already taken';
      }
      return errors;
    })
    .catch(() => {
      errors.pseudo = 'Pseudo already taken';
      return errors;
    });
};
