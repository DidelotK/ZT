import React, {Component} from 'react';
import {connect} from 'react-redux';

import View from './view';
import {getFilms} from '../../actions/films/get-films';
import {getSeries} from '../../actions/series/get-series';

@connect(store => {
    return {
      films: store.films.films,
      series: store.series.series
    };
  },
  dispatch => {
    return {
      getFilmsAction: search => {
        const filter = {
          simple: {
            name: {
              $regex: `.*${search}.*`,
              $options: 'i'
            }
          }
        };
        return dispatch(getFilms(filter));
      },
      getSeriesAction: search => {
        const filter = {
          simple: {
            name: {
              $regex: `.*${search}.*`,
              $options: 'i'
            }
          }
        };
        return dispatch(getSeries(filter));
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
  componentWillReceiveProps(nextProps) {
    const lastSearch = this.props.routeParams.search;
    const newSearch = nextProps.routeParams.search;
    if (this.state.loaded && lastSearch !== newSearch) {
      this.setState({loaded: false});
      this._loadMedia(newSearch);
    }
  }
  componentWillMount() {
    const search = this.props.routeParams.search;
    this._loadMedia(search);
  }
  _loadMedia(search) {
    return this.props.getFilmsAction(search)
      .then(() => {
        return this.props.getSeriesAction(search);
      })
      .then(() => {
        this.setState({loaded: true});
      });
  }
  render() {
    const {loaded} = this.state;
    const {routeParams} = this.props;
    if (!loaded) {
      return (
        <div>
          Loading ...
        </div>
      );
    }
    const search = routeParams.search;
    const regex = new RegExp(`.*${search}.*`,'i');
    const films = this.props.films.filter(film => {
      return film.name.match(regex);
    });
    const series = this.props.series.filter(serie => {
      return serie.name.match(regex);
    });
    return (
      <div key={routeParams.search}>
        <View
          films={films}
          search={routeParams.search}
          series={series}
        />
      </div>
    );
  }
}

export default Container;
