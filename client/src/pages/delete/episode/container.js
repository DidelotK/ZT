import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';
// import {deleteEpisode} from '../../../actions/episode/delete-episode';

@connect(undefined,
  dispatch => {
    return {
      deleteEpisodeAction: id => {
        // dispatch(deleteEpisode(id));
      }
    }
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.deleteEpisodeAction}/>;
  }
}

export default Container;
