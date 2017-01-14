import React, {Component} from 'react';

import View from './view';

class Container extends Component {
  render() {
    return <View type={this.props.type}/>
  }
}

export default Container
