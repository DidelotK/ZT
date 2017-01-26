import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import Layout from './view';

@connect(store => {
  return {
    user: store.user
  };
}
)
class Container extends Component {
  componentWillMount() {
    const {user, dispatch} = this.props;
    if (!user.isAuthenticated) {
      dispatch(push('/login'));
    }
  }
  render() {
    const {children, user} = this.props;
    return (
      <Layout
        children={children}
        user={user}/>
    );
  }
}

export default Container;
