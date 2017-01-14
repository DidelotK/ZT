import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';
// import {removeEpisode} from '../../../actions/episode/remove-episode';

@connect(null,
  dispatch => {
    return {
      removeEpisodeAction: id => {
        // dispatch(removeEpisode(id));
      }
    }
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.removeEpisodeAction}/>;
  }
}

export default Container;
