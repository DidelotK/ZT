import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';

import {loginUser} from '../../actions/user';
import View from './view';

@connect(store => {
    return {
      user: store.user
    }
  },
  dispatch => {
    return {
      loginHandler: creds => {
        dispatch(loginUser(creds));
      }
    }
  })
class Container extends Component {
  componentWillMount() {
    if (this.props.user.isAuthenticated) {
      browserHistory.push('/');
    }
  }
  render() {
    return (
      <View loginHandler={this.props.loginHandler}/>
    );
  }
}

export default Container;
