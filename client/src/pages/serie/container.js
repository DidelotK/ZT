import React, {Component} from 'react';
import {connect} from 'react-redux';
import View from './view';
import {getSerie} from '../../actions/series/get-serie';

@connect(undefined,
  dispatch => {
    return {
      getSerieAction: id => {
        return dispatch(getSerie(id));
      }
    }
  })
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      serie: null
    };
  }
  componentWillReceiveProps(nextProps) {
    const lastId = this.props.routeParams.id;
    const newId = nextProps.routeParams.id;
    if (this.state.loaded && lastId !== newId) {
      this.setState({loaded: false});
      this._loadMedia(newId);
    }
  }
  componentWillMount() {
    const {id} = this.props.routeParams;
    this._loadMedia(id);
  }
  _loadMedia(_id) {
    const filter = {simple: {_id}};
    return this.props.getSerieAction(filter)
      .then(serie => {
        this.setState({
          loaded: true,
          serie
        });
      });
  }
  render() {
    const {loaded, serie} = this.state;
    if (!loaded) {
      return (
        <div>
          Loading ...
        </div>
      );
    }
    return (
      <View serie={serie}/>
    );
  }
}

export default Container;
