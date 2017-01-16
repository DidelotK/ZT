import React, {Component} from 'react';

import View from './view';

class Container extends Component {
  render() {
    const {links} = this.props;
    return <View links={links}/>
  }
}

export default Container;
