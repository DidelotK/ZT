import React, {Component} from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';

import LoginForm from '../../forms/login/container';
import styles from './styles.css';

@CSSModules(styles)
class Login extends Component {
  render() {
    return (
      <DocumentTitle title="Login">
        <div styleName="page">
          <div styleName="container">
            <h1>Login</h1>
            <LoginForm onSubmit={this.props.loginHandler}/>
            <div styleName="link">
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Login;
