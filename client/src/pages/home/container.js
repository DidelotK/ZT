import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';
import {getFilms} from '../../actions/films/get-films';
import {sortFilms} from '../../actions/films/sort-films';
import {getSeries} from '../../actions/series/get-series';
import {sortSeries} from '../../actions/series/sort-series';

@connect(store => {
    return {
      films: store.films.films,
      series: store.series.series
    };
  },
  dispatch => {
    return {
      getFilmsAction: () => {
        return dispatch(getFilms());
      },
      sortFilmsActions: films => {
        return dispatch(sortFilms(films));
      },
      getSeriesAction: () => {
        return dispatch(getSeries());
      },
      sortSeriesActions: series => {
        return dispatch(sortSeries(series));
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
    this.props.getFilmsAction()
      .then(() => {
        return this.props.sortFilmsActions(this.props.films);
      })
      .then(() => {
        return this.props.getSeriesAction();
      })
      .then(() => {
        return this.props.sortSeriesActions(this.props.series);
      })
      .then(() => {
        this.setState({loaded: true});
      });
  }
  render() {
    if (!this.state.loaded) {
      return null;
    }
    return <View
      films={this.props.films}
      series={this.props.series}
    />
  }
}

export default Container;
