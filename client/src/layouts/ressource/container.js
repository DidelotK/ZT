import React, {Component} from 'react';

import Layout from './view';

class Container extends Component {
  render() {
    return <Layout children={this.props.children} user={this.props.user}/>
  }
}

export default Container;
