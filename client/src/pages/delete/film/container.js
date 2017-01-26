import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import View from './view';
import {deleteFilm} from '../../../actions/films/delete-film';

@connect(undefined,
  dispatch => {
    return {
      deleteFilmAction: form => {
        dispatch(deleteFilm(form.id));
        dispatch(reset('delete_film'));
      }
    };
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.deleteFilmAction}/>;
  }
}

export default Container;
