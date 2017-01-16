import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import View from './view';
import {logout} from '../../actions/user/auth';

@connect(store => {
    return {
      user: store.user
    };
  },
  dispatch => {
    return {
      logoutAction: () => {
        dispatch(logout());
      },
      redirect: path => {
        dispatch(push(path));
      }
    }
  })
class Container extends Component {
  render() {
    const {logoutAction, redirect, location, user} = this.props;
    return <View logout={logoutAction}
                   redirect={redirect}
                   location={location}
                   isAuthenticated={user.isAuthenticated}/>
  }
}

export default Container;
