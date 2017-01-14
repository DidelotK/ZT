import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {reset} from 'redux-form';

import View from './view';
// import {removeSerie} from '../../../actions/serie/remove-serie';

@connect(null,
  dispatch => {
    return {
      removeSerieAction: serie => {
        console.log(serie);
        // dispatch(removeSerie(serie));
        // dispatch(reset('remove_serie'));
      }
    }
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.removeSerieAction}/>;
  }
}

export default Container;
