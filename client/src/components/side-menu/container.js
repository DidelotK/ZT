import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import View from './view';

@connect(undefined,
  dispatch => {
    return {
      redirect: path => {
        dispatch(push(path));
      }
    };
  })
class Container extends Component {
  render() {
    const {redirect} = this.props;
    return <View redirect={redirect}/>;
  }
}

export default Container;
