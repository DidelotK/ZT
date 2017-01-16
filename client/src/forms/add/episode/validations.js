import {change} from 'redux-form';
import {getSerie} from '../../../actions/series/get-serie';

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'serieSelected',
    'name',
    'saison',
    'number',
    'resume'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
};

export const asyncValidate = (values, dispatch) => {
  const filter = {simple: {name: values.serieSelected}};
  const errors = {};
  return dispatch(getSerie(filter))
    .then(serie => {
      if (!serie) {
        errors.serieSelected = 'No serie found';
        dispatch(change('add_episode', 'serie', null));
      } else {
        dispatch(change('add_episode', 'serie', serie));
      }
      return errors;
    })
    .catch(() => {
      errors.serieSelected = 'No serie found';
      return errors;
    })
};
