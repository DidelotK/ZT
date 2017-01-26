import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';
import {logout, checkAuth} from '../../actions/user/auth';

@connect(store => {
  return {
    user: store.user
  };
},
  dispatch => {
    return {
      checkAuth: () => {
        return dispatch(checkAuth());
      },
      logoutAction: () => {
        dispatch(logout());
      }
    };
  })
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authChecked: false
    };
  }
  componentWillMount() {
    return this.props.checkAuth()
      .then(() => {
        this.setState({authChecked: true});
      });
  }
  render() {
    const {authChecked} = this.state;
    const {children, location} = this.props;
    if (!authChecked) {
      return (
        <div>
          Loading ...
        </div>
      );
    }
    return (
      <View children={children}
        location={location.pathname}/>
    );
  }
}

export default Container;
