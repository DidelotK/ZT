import React, {Component} from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';
import AddEpisodeForm from '../../../forms/add/episode/container';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <div>
        <AddEpisodeForm />
      </div>
    );
  }
}

export default View;
