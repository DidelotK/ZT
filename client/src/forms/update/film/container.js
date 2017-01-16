import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';

import Form from './form';
import {getFilms} from '../../../actions/films/get-films';

@connect(store => {
    const selector = formValueSelector('update_film');
    return {
      isFilmSelected: selector(store, 'name') || false,
      posterLink: selector(store, 'posterLink') || null,
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
      loaded: false,
      film: null,
    };
  }
  componentWillMount() {
    return this.props.getFilmsAction()
      .then(() => {
        this.setState({loaded: true});
      });
  }
  render() {
    const {onSubmit, films, isFilmSelected, posterLink} = this.props;
    const {loaded} = this.state;
    if (!loaded) {
      return (
        <div>
          Loading ...
        </div>
      );
    }
    return (
      <Form
        films={films}
        posterLink={posterLink}
        isFilmSelected={isFilmSelected}
        onSubmit={onSubmit}
      />
    );
  }
}

export default Container;
