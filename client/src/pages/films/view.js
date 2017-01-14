import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';

import PosterArea from '../../components/poster-area/container';
import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <DocumentTitle title='Films'>
        <div styleName='page'>
          <div styleName='container'>
            <h1>Movies</h1>
            <PosterArea
              media={this.props.films}
              typeMedia='film'
              maxDisplay={20}
              mediaPerColumn={5}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
