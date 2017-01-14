export const validate = values => {
  const errors = {};
  const requiredFields = [
    'ref'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  return errors;
};