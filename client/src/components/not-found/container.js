import React, {Component} from 'react';

import View from './view';

class Container extends Component {
  render() {
    const {type} = this.props;
    return <View type={type}/>;
  }
}

export default Container;
