import React, {Component} from 'react';
import {connect} from 'react-redux';

import Form from './form';
import {getFilms} from '../../../actions/films/get-films';

@connect(store => {
    return {
      films: store.films.films
    }
  },
  dispatch => {
    return {
      getFilmsAction: () => {
        return dispatch(getFilms());
      }
    };
  })
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  componentWillMount() {
    this.props.getFilmsAction()
      .then(() => {
        this.setState({loaded: true});
      });
  }
  render() {
    if (!this.state.loaded) {
      return null;
    }
    const {onSubmit, films} = this.props;
    return (
      <Form
        films={films}
        onSubmit={onSubmit}
      />
    );
  }
}

export default Container;
