import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';

import {register} from '../../actions/user/register';
import View from './view';

@connect(store => {
  return {
    user: store.user
  };
},
  dispatch => {
    return {
      registerHandler: creds => {
        dispatch(register(creds));
      },
      redirect: path => {
        dispatch(push(path));
      }
    };
  })
class Container extends Component {
  componentWillMount() {
    if (this.props.user.isAuthenticated) {
      this.props.redirect('/');
    }
  }
  render() {
    return (
      <View registerHandler={this.props.registerHandler}/>
    );
  }
}

export default Container;
