import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';
import {deleteEpisode} from '../../../actions/episodes/delete-episode';

@connect(undefined,
  dispatch => {
    return {
      deleteEpisodeAction: form => {
        dispatch(deleteEpisode(form.episodeId));
      }
    };
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.deleteEpisodeAction}/>;
  }
}

export default Container;
