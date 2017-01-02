import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import View from './view';
import {queryFilms, sortFilms} from '../../actions/filmsActions';


@connect(store => {
    return {
      films: store.films.films
    };
  },
  dispatch => {
    return {
      redirect: path => {
        dispatch(push(path));
      },
      queryLastFilmsAction: () => {
        return dispatch(queryFilms());
      },
      sortFilmsActions: films => {
        return dispatch(sortFilms(films));
      }
    }
  })
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentWillMount() {
    return this.props.queryLastFilmsAction()
      .then(() => {
        return this.props.sortFilmsActions(this.props.films);
      })
      .then(() => {
        this.setState({loaded: true});
      });
  }
  render() {
    if (!this.state.loaded) {
      return null;
    }
    return <View films={this.props.films}/>
  }
}

export default Container;
