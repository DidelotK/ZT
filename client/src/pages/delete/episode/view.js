import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import DeleteEpisodeForm from '../../../forms/delete/episode/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName="container">
        <DeleteEpisodeForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
