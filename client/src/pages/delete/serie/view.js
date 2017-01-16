import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import RemoveSerieForm from '../../../forms/delete/serie/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName='container'>
        <RemoveSerieForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
