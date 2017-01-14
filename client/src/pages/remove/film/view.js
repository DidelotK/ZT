import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import RemoveFilmForm from '../../../forms/remove/film/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName='container'>
        <RemoveFilmForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
