import React, {Component} from 'react';

import Form from './form';

class Container extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <Form
        onSubmit={onSubmit}
      />
    );
  }
}

export default Container;
