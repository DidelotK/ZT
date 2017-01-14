import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import CSSModules from 'react-css-modules';
import {Grid} from 'semantic-ui-react';

import SideMenu from '../../components/ressource/side-menu/container';
import styles from './styles.css';

@CSSModules(styles)
class Layout extends Component {
  prepareTitle(path) {
    path = path.substr(1);
    path = path.replace(new RegExp('/', 'g'), ' ');
    const title = path.charAt(0).toUpperCase() + path.slice(1);
    return title;
  }
  render() {
    const title =
      this.prepareTitle(this.props.children.props.location.pathname);
    return (
      <DocumentTitle title={title}>
        <div styleName='page'>
          <div styleName='container'>
            <h1 styleName='title'>{title}</h1>
            <Grid>
              <Grid.Column width={4}>
                <div styleName='side-menu'>
                  <SideMenu/>
                </div>
              </Grid.Column>
              <Grid.Column width={12}>
                <div styleName='content'>
                  {this.props.children}
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Layout;
