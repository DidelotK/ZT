import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';

@connect(store => {
  return {
    user: store.user
  }
})
class Container extends Component {
  render() {
    return (
      <View/>
    );
  }
}

export default Container;
