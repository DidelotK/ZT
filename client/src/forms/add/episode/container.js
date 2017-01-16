import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formValueSelector, change} from 'redux-form';

import Form from './form';
import {getSeries} from '../../../actions/series/get-series';

@connect(store => {
    const selector = formValueSelector('add_episode');
    return {
      isSerieSelected: selector(store, 'serieSelected') || false,
      series: store.series.series,
      user: store.user
    }
  },
  dispatch => {
    return {
      getSeriesAction: () => {
        return dispatch(getSeries());
      },
      setUploaderAction: uploaderId => {
        const uploader = {id: uploaderId, customType: 'users'};
        dispatch(change('add_episode', 'uploader', uploader));
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
    const {onSubmit, series, isSerieSelected} = this.props;
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
        isSerieSelected={isSerieSelected}
        onSubmit={onSubmit}
      />
    );
  }
  componentDidMount() {
    const {user} = this.props;
    this.props.setUploaderAction(user.id);
  }
}

export default Container;
