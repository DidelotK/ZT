import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';

class View extends Component {
  render() {
    return (
      <DocumentTitle title='404 :p'>
        <div>
          404 not found
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
