import {change} from 'redux-form';
import {getFilm} from '../../../actions/films/get-film';

const resetValues = dispatch => {
  const formName = 'update_film';
  dispatch(change(formName, 'id', null));
  dispatch(change(formName, 'name', ''));
  dispatch(change(formName, 'description', null));
  dispatch(change(formName, 'posterLink', null));
  dispatch(change(formName, 'productionDate', null));
  dispatch(change(formName, 'actors', null));
  dispatch(change(formName, 'director', null));
  dispatch(change(formName, 'country', null));
  dispatch(change(formName, 'length', null));
};

const fillForm = (dispatch, film) => {
  const formName = 'update_film';
  dispatch(change(formName, 'id', film.id));
  dispatch(change(formName, 'name', film.name));
  dispatch(change(formName, 'description', film.description));
  dispatch(change(formName, 'posterLink', film.posterLink));
  dispatch(change(formName, 'productionDate', new Date(film.productionDate)));
  dispatch(change(formName, 'actors', film.actors.join('\n')));
  dispatch(change(formName, 'director', film.director));
  dispatch(change(formName, 'country', film.country));
  dispatch(change(formName, 'length', film.length));
};

export const validate = values => {
  const errors = {};
  const requiredFields = [
    'filmSelected',
    'name',
    'description',
    'posterLink',
    'productionDate',
    'actors',
    'director',
    'country',
    'length'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.actors) {
    const numberActors = values.actors.split(/\r?\n/)
      .filter(actor => {
        return actor !== '';
      })
      .length;
    if (numberActors < 3) {
      errors.actors = 'Need at least 3 actors';
    }
  }
  return errors;
};

export const asyncValidate = (values, dispatch) => {
  const filter = {simple: {name: values.filmSelected}};
  const errors = {};
  return dispatch(getFilm(filter))
    .then(film => {
      if (!film) {
        resetValues(dispatch);
        errors.filmSelected = 'No film found';
      } else {
        fillForm(dispatch, film);
      }
      return errors;
    })
    .catch(() => {
      errors.filmSelected = 'No film found';
      return errors;
    });
};
