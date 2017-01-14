import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import View from './view';
import {updateFilm} from '../../../actions/film/update-film';

@connect(null,
  dispatch => {
    return {
      updateFilmAction: film => {
        dispatch(updateFilm(film));
        dispatch(reset('update_film'));
      }
    }
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.updateFilmAction}/>;
  }
}

export default Container;
