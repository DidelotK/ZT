import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import View from './view';
import {loadUser} from '../../actions/user/load-user';

@connect(store => {
    return {
      user: store.user
    };
  },
  dispatch => {
    return {
      loadUserAction: token => {
        return dispatch(loadUser(token));
      },
      redirect: path => {
        dispatch(push(path));
      }
    }
  })
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentWillMount() {
    const {user} = this.props;
    this.props.loadUserAction(user.token)
      .then(() => {
        this.setState({loaded: true});
      });
  }
  render() {
    const {user, redirect} = this.props;
    const {loaded} = this.state;
    if (!loaded) {
      return (
        <div>
          Loading ...
        </div>
      );
    }
    return (
      <View
        user={user.userInfo}
        redirect={redirect}/>
    );
  }
}

export default Container;
