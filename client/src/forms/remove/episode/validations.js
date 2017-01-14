export const validate = values => {
  const errors = {};
  const requiredFields = [
    'name',
    'serie'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
};