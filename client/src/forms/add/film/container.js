import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';

import Form from './form';

@connect(store => {
    const selector = formValueSelector('add_film');
    return {
      posterLink: selector(store, 'posterLink')
    }
  })
class Container extends Component {
  render() {
    const {posterLink, onSubmit} = this.props;
    return (
      <Form
        posterLink={posterLink}
        onSubmit={onSubmit}
      />
    );
  }
}

export default Container;
