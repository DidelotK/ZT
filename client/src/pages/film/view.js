import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {Card, Icon, Image} from 'semantic-ui-react';
import DocumentTitle from 'react-document-title';

import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    const film = this.props.film;
    console.log(film);
    return (
      <DocumentTitle title='Films'>
        <div styleName='page'>
          <div styleName='container'>
            <h1 styleName="title">{film.attributes.name}</h1>
            <Card>
              <Image src={film.attributes.posterLink} />
            </Card>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
