import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import AddFilmForm from '../../../forms/add/film/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName='container'>
        <AddFilmForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
