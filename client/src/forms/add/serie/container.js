import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';
import {change} from 'redux-form';

import Form from './form';

@connect(store => {
    const selector = formValueSelector('add_serie');
    return {
      posterLink: selector(store, 'posterLink'),
      user: store.user
    }
  },
  dispatch => {
    return {
      setUploaderAction: uploaderId => {
        const uploader = {id: uploaderId, customType: 'users'};
        dispatch(change('add_serie', 'uploader', uploader));
      }
    }
  })
class Container extends Component {
  render() {
    const {user, setUploaderAction, posterLink, onSubmit} = this.props;
    return (
      <Form
        posterLink={posterLink}
        setUploader={setUploaderAction}
        user={user}
        onSubmit={onSubmit}
      />
    );
  }
  componentDidMount() {
    const {user} = this.props;
    this.props.setUploaderAction(user.id);
  }
}

export default Container;
