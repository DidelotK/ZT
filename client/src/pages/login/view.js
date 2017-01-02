import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';

import LoginForm from '../../components/forms/login/form';
import styles from './styles.css';

@CSSModules(styles)
class Login extends Component {
  render() {
    return (
      <DocumentTitle title='Login'>
        <div styleName='page'>
          <div styleName='container'>
            <h1>Login</h1>
            <LoginForm onSubmit={this.props.loginHandler}/>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Login;
