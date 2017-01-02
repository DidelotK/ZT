import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {Input, Menu, Button} from 'semantic-ui-react';

import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    const location = this.props.location;
    const isAuthenticated = this.props.isAuthenticated;
    let button = null;
    if (isAuthenticated) {
      button = (
        <Menu.Item>
          <Button color='red'
                  onClick={() => {this.props.logout()}}>
            Logout
          </Button>
        </Menu.Item>
      );
    } else {
      button = (
        <Menu.Item>
          <Button color='green'
                  onClick={() => {this.props.redirect('/login');}}>
            Login
          </Button>
        </Menu.Item>
      );
    }
    return (
      <div styleName='container'>
        <Menu stackable>
          <Menu.Item active={location === '/'}
                     name='Home'
                     onClick={() => {this.props.redirect('/');}}/>
          <Menu.Item active={location === '/films'}
                     name='Films'
                     onClick={() => {this.props.redirect('/films');}}/>
          <Menu.Item active={location === '/series'}
                     name='Series'
                     onClick={() => {this.props.redirect('/series');}}/>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input action={{ icon: 'search' }} placeholder='Search...' />
            </Menu.Item>
            {button}
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
export default View;
