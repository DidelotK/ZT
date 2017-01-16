import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import RemoveEpisodeForm from '../../../forms/delete/episode/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName='container'>
        <RemoveEpisodeForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
