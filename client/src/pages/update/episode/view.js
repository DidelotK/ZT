import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import UpdateEpisodeForm from '../../../forms/update/episode/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div styleName='container'>
        <UpdateEpisodeForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
