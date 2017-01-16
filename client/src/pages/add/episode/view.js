import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import AddEpisodeForm from '../../../forms/add/episode/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <div>
        <AddEpisodeForm onSubmit={onSubmit}/>
      </div>
    );
  }
}

export default View;
