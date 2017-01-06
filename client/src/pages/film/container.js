import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';
import {fetchFilm} from '../../actions/film';

@connect(store => {
    return {
      film: store.film.film
    };
  },
  dispatch => {
    return {
      fetchFilm: id => {
        return dispatch(fetchFilm(id));
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
    if (!this.props.routeParams || !this.props.routeParams.id) {
      return; // TODO ERROR MESSAGE
    }
    const id = this.props.routeParams.id;
    return this.props.fetchFilm(id)
      .then(() => {
        console.log(this.props);
        this.setState({loaded: true});
      })
  }
  render() {
    if (!this.state.loaded) {
      return null;
    }
    return (
      <View film={this.props.film}/>
    );
  }
}

export default Container;
