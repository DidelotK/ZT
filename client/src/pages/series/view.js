import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';

import styles from './styles.css';
import PosterArea from '../../components/poster-area/container';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <DocumentTitle title="Series">
        <div styleName="page">
          <div styleName="container">
            <h1>Series</h1>
            <PosterArea
              media={this.props.series}
              typeMedia="serie"
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
