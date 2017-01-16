import {change} from 'redux-form';
import {getSerie} from '../../../actions/series/get-serie';

const resetValues = (dispatch) => {
  const formName = 'update_serie';
  dispatch(change(formName, 'id', null));
  dispatch(change(formName, 'name', ''));
  dispatch(change(formName, 'description', null));
  dispatch(change(formName, 'posterLink', null));
  dispatch(change(formName, 'productionDate', null));
  dispatch(change(formName, 'actors', null));
  dispatch(change(formName, 'director', null));
  dispatch(change(formName, 'country', null));
};
const fillForm = (dispatch, serie) => {
  const formName = 'update_serie';
  dispatch(change(formName, 'id', serie.id));
  dispatch(change(formName, 'name', serie.name));
  dispatch(change(formName, 'description', serie.description));
  dispatch(change(formName, 'posterLink', serie.posterLink));
  dispatch(change(formName, 'productionDate', new Date(serie.productionDate)));
  dispatch(change(formName, 'actors', serie.actors.join('\n')));
  dispatch(change(formName, 'director', serie.director));
  dispatch(change(formName, 'country', serie.country));
};

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'serieSelected',
    'name',
    'description',
    'posterLink',
    'productionDate',
    'actors',
    'director',
    'country',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  if (values.actors) {
    const numberActors = values.actors.split(/\r?\n/)
      .filter(actor => {return actor !== ''})
      .length;
    if (numberActors < 3) {
      errors.actors = 'Need at least 3 actors';
    }
  }
  return errors;
};

export const asyncValidate = (values, dispatch) => {
  const filter = {simple: {name: values.serieSelected}};
  const errors = {};
  return dispatch(getSerie(filter))
    .then(serie => {
      if (!serie) {
        resetValues(dispatch);
        errors.serieSelected = 'No serie found';
      } else {
        fillForm(dispatch, serie);
      }
      return errors;
    })
    .catch(() => {
      errors.serieSelected = 'No serie found';
      return errors;
    })
};
