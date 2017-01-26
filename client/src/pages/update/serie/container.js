import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import View from './view';
import {updateSerie} from '../../../actions/series/update-serie';

@connect(null,
  dispatch => {
    return {
      updateSerieAction: serie => {
        dispatch(updateSerie(serie));
        dispatch(reset('update_serie'));
      }
    };
  })
class Container extends Component {
  render() {
    const {updateSerieAction} = this.props;
    return <View onSubmit={updateSerieAction}/>;
  }
}

export default Container;
