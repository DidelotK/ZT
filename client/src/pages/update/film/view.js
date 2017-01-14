import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import UpdateFilmForm from '../../../forms/update/film/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName='container'>
        <UpdateFilmForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
