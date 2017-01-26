import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import UpdateSerieForm from '../../../forms/update/serie/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName="container">
        <UpdateSerieForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
