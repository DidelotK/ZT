import React from 'react';
import {Field, reduxForm, change} from 'redux-form';
import {AutoComplete} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {fullBlack} from 'material-ui/styles/colors';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import {validate} from './validations';

const floatingLabelStyle = {
  color: fullBlack
};

@reduxForm({
  form: 'delete_episode',
  validate
})
@CSSModules(styles)
class Form extends React.Component {
  setSerieId(name) {
    const {dispatch, series} = this.props;
    if (!name || !series || !series.length) {
      return;
    }
    const matchingSeries = series.filter(episode => {
      return episode.name === name;
    });
    if (!matchingSeries || !matchingSeries.length) {
      dispatch(change('delete_episode', 'serieSelected', null));
      return;
    }
    dispatch(change('delete_episode', 'serieSelected', matchingSeries[0]));
  }
  setEpisodeId(name) {
    const {dispatch, episodes} = this.props;
    if (!name || !episodes || !episodes.length) {
      return;
    }
    const matchingEpisodes = episodes.filter(episode => {
      return episode.name === name;
    });
    if (!matchingEpisodes || !matchingEpisodes.length) {
      dispatch(change('delete_episode', 'episodeId', null));
      return;
    }
    dispatch(change('delete_episode', 'episodeId', matchingEpisodes[0].id));
  }
  render() {
    const {handleSubmit, serieSelected, series, episodes} = this.props;
    let dataSourceSeries = [],
      dataSourceEpisodes = [];
    if (series) {
      dataSourceSeries = series.map(serie => serie.name);
    }

    if (episodes) {
      dataSourceEpisodes = episodes.map(episode => episode.name);
    }

    return (
      <form onSubmit={handleSubmit} styleName="form">
        <div>
          <Field name="serie" component={AutoComplete} type="text"
            floatingLabelText="Serie to delete"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={dataSourceSeries}
            onNewRequest={name => this.setSerieId(name)}
            onUpdateInput={name => this.setSerieId(name)}
          />
        </div>
        {serieSelected &&
        <div>
          <Field name="episode" component={AutoComplete} type="text"
            floatingLabelText="Episode to delete"
            floatingLabelStyle={floatingLabelStyle}
            fullWidth={true}
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={dataSourceEpisodes}
            onNewRequest={name => this.setEpisodeId(name)}
            onUpdateInput={name => this.setEpisodeId(name)}
          />
        </div>
        }
        <div styleName="button">
          <RaisedButton
            label="Remove"
            style={{width: '50%'}}
            backgroundColor="grey"
            type="submit"
          />
        </div>
      </form>
    );
  }
}

export default Form;
