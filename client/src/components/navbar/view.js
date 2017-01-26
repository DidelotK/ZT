import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {Menu, Button} from 'semantic-ui-react';

import styles from './styles.css';
import SearchInput from '../search-input/container';

@CSSModules(styles)
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }
  updateInputValue(evt) {
    this.setState({
      search: evt.target.value
    });
  }
  search() {
    if (this.state.search) {
      this.setState({search: ''});
      this.props.redirect(`/search/${this.state.search}`);
    }
  }
  render() {
    const {location, isAuthenticated} = this.props;
    let profile = null;
    let button = null;
    if (isAuthenticated) {
      profile = (
        <Menu.Item active={location === '/profile'}
          name="Profile"
          onClick={() => {
            this.props.redirect('/profile');
          }}/>
      );
      button = (
        <Menu.Item>
          <Button color="red"
            onClick={() => {
              this.props.logout();
            }}>
            Logout
          </Button>
        </Menu.Item>
      );
    } else {
      button = (
        <Menu.Item>
          <Button color="green"
            onClick={() => {
              this.props.redirect('/login');
            }}>
            Login
          </Button>
        </Menu.Item>
      );
    }
    return (
      <div styleName="container">
        <Menu stackable>
          <Menu.Item active={location === '/'}
            name="Home"
            onClick={() => {
              this.props.redirect('/');
            }}/>
          <Menu.Item active={location === '/films'}
            name="Movies"
            onClick={() => {
              this.props.redirect('/films');
            }}/>
          <Menu.Item active={location === '/series'}
            name="Series"
            onClick={() => {
              this.props.redirect('/series');
            }}/>
          {profile}
          <Menu.Menu position="right">
            <Menu.Item>
              <SearchInput redirect={this.props.redirect}/>
            </Menu.Item>
            {button}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
export default View;
