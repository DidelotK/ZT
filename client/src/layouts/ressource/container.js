import React, {Component} from 'react';

import Layout from './view';

class Container extends Component {
  render() {
    const {children, user} = this.props;
    return <Layout children={children} user={user}/>
  }
}

export default Container;
