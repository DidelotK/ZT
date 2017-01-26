import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import View from './view';
import {updateFilm} from '../../../actions/films/update-film';

@connect(null,
  dispatch => {
    return {
      updateFilmAction: film => {
        dispatch(updateFilm(film));
        dispatch(reset('update_film'));
      }
    };
  })
class Container extends Component {
  render() {
    const {updateFilmAction} = this.props;
    return <View onSubmit={updateFilmAction}/>;
  }
}

export default Container;
