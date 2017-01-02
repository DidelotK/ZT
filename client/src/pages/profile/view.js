import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';

import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <DocumentTitle title='Profile'>
        <div styleName='page'>
          <div styleName='container'>
            <h1>Profile</h1>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
