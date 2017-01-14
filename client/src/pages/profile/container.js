import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import View from './view';

@connect(store => {
    return {
      user: store.user
    };
  },
  dispatch => {
    return {
      redirect: path => {
        dispatch(push(path));
      }
    }
  })
class Container extends Component {
  render() {
    return (
      <View
        user={this.props.user}
        redirect={this.props.redirect}/>
    );
  }
}

export default Container;
