import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';

import RegisterForm from '../../forms/register/container';
import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <DocumentTitle title="Register">
        <div styleName="page">
          <div styleName="container">
            <h1>Register</h1>
            <RegisterForm onSubmit={this.props.registerHandler}/>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
