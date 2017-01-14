import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import View from './view';
import {createSerie} from '../../../actions/serie/get-serie';

@connect(null,
  dispatch => {
    return {
      createSerie: serie => {
        dispatch(createSerie(serie));
        dispatch(reset('add_serie'));
      }
    }
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.createSerie}/>;
  }
}

export default Container;
