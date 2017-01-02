import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';

import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <DocumentTitle title='Series'>
        <div styleName='page'>
          <div styleName='container'>
            <h1>Series</h1>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
