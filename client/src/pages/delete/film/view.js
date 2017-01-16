import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import DeleteFilmForm from '../../../forms/delete/film/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName='container'>
        <DeleteFilmForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
