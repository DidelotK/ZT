import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';

import Form from './form';
import {getSeries} from '../../../actions/series/get-series';

@connect(store => {
    const selector = formValueSelector('update_serie');
    return {
      isSerieSelected: selector(store, 'name') || false,
      posterLink: selector(store, 'posterLink') || null,
      series: store.series.series
    }
  },
  dispatch => {
    return {
      getSeriesAction: () => {
        return dispatch(getSeries());
      }
    };
  })
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }
  componentWillMount() {
    const {getSeriesAction} = this.props;
    getSeriesAction()
      .then(() => {
        this.setState({loaded: true});
      });
  }
  render() {
    const {onSubmit, series, isSerieSelected, posterLink} = this.props;
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
        series={series}
        posterLink={posterLink}
        isSerieSelected={isSerieSelected}
        onSubmit={onSubmit}
      />
    );
  }
}

export default Container;
