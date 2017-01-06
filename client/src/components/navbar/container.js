import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import View from './view';
import {logout} from '../../actions/user';

@connect((store) => {
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
    return <View logout={this.props.logoutAction}
                   redirect={this.props.redirect}
                   location={this.props.location}
                   isAuthenticated={this.props.user.isAuthenticated}/>
  }
}

export default Container;
