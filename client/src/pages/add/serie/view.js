import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import AddSerieForm from '../../../forms/add/serie/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName='container'>
        <AddSerieForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
