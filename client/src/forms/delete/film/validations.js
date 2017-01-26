export const validate = (values, props) => {
  const films = props.films.map(film => film.name);
  const errors = {};
  const requiredFields = [
    'name'
  ];
  if (films && films.indexOf(values.name) === -1) {
    errors.name = 'No film found';
  }
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};
