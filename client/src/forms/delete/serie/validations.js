export const validate = (values, props) => {
  let series;
  if (props.series) {
    series = props.series.map(serie => serie.name);
  }
  const errors = {};
  const requiredFields = [
    'name'
  ];
  if (!series || series.indexOf(values.name) === -1) {
    errors.name = 'No serie found';
  }
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};
