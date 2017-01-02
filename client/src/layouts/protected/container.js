import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import Layout from './view';

@connect((store) => {
    return {
      user: store.user
    }
  }
)
class ProtectedContainer extends Component {
  componentWillMount() {
    console.log(this.props.user.isAuthenticated);
    if (!this.props.user.isAuthenticated) {
      this.props.dispatch(push('/login'));
    }
  }
  render() {
    return <Layout children={this.props.children} user={this.props.user}/>
  }
}

export default ProtectedContainer;
