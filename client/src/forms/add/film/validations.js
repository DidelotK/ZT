export const validate = values => {
  const errors = {};
  const requiredFields = [
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