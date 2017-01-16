import React, {Component} from 'react';

import View from './view';

class Container extends Component {
  render() {
    const {episodes} = this.props;
    return <View episodes={episodes}/>
  }
}

export default Container;