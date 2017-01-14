export const validate = (values, props) => {
  const films = props.films.map(film => film.name);
  const errors = {};
  const requiredFields = [
    'ref'
  ];
  if (films && films.indexOf(values.ref) === -1) {
    errors.ref = 'No film found'
  }
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
};