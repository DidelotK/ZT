import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {reset} from 'redux-form';

import View from './view';
// import {updateEpisode} from '../../../actions/episode/update-episode';

@connect(null,
  dispatch => {
    return {
      updateEpisodeAction: episode => {
        // dispatch(updateEpisode(episode));
        // dispatch(reset('update_episode'));
      }
    }
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.updateEpisodeAction}/>;
  }
}

export default Container;
