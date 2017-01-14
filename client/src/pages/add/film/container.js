import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import View from './view';
import {createFilm} from '../../../actions/film/create-film';

@connect(null,
  dispatch => {
    return {
      createFilm: film => {
        dispatch(createFilm(film));
        dispatch(reset('add_film'));
      }
    }
  })
class Container extends Component {
  render() {
    return <View onSubmit={this.props.createFilm}/>;
  }
}

export default Container;
