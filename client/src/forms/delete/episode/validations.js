export const validate = (values, props) => {
  let series;
  let episodes;
  const errors = {};
  const requiredFields = [
    'serie',
    'episode',
    'serieSelected',
    'episodeId'
  ];
  if (props.series) {
    series = props.series.map(serie => serie.name);
  }
  if (props.episodes) {
    episodes = props.episodes.map(episode => episode.name);
  }
  if (!series || !series.length || series.indexOf(values.serie) === -1) {
    errors.serie = 'No serie found';
  }
  if (!episodes || !episodes.length ||
    episodes.indexOf(values.episode) === -1) {
    errors.episode = 'No episode found';
  }

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};
