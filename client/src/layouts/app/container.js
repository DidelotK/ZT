import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';
import {logout} from '../../actions/userActions';
import {checkAuth} from '../../actions/userActions';

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
    }
  }
)
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  componentWillMount() {
    return this.props.checkAuth()
      .then(() => {
        this.setState({checked: true});
      })
  }
  render() {
    if (!this.state.checked) {
      return null;
    }
    return <View children={this.props.children}
                 location={this.props.location.pathname}
    />
  }
}

export default Container;
