import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import View from './view';
import {createEpisode} from '../../../actions/episodes/create-episode';

@connect(undefined,
  dispatch=> {
    return {
      createEpisodeAction: episode => {
        delete episode.serieSelected;
        dispatch(createEpisode(episode));
        dispatch(reset('add_episode'));
      }
    }
  })
class Container extends Component {
  render() {
    const {createEpisodeAction} = this.props;
    return <View onSubmit={createEpisodeAction}/>;
  }
}

export default Container;
