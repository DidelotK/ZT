import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';
import {Image} from 'semantic-ui-react';

import styles from './styles.css';
import DateHelper from '../../helpers/date';
import DownloadBar from '../../components/downloadbar/container';
import NotFound from '../../components/not-found/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const film = this.props.film;
    if (!film) {
      return <NotFound type="film"/>;
    }
    return (
      <DocumentTitle title="Film">
        <div styleName="page">
          <div styleName="container">
            <h1 styleName="title">{film.name}</h1>
            <hr/>
            <card styleName="film_poster">
              <Image src={film.posterLink} />
            </card>
            <div styleName="film_info">
              <div>
                <h3>Release :&nbsp;</h3>
                <DateHelper date={film.productionDate}/>
              </div>
              <div>
                <h3>Director :&nbsp;</h3>
                {film.director}
              </div><br/>
              <div>
                <h3>Actors :&nbsp;</h3>
                {film.actors[0]}, {film.actors[1]}, {film.actors[2]}
              </div>
              <br/>
              <div>
                <h3>Country :&nbsp;</h3>
                {film.country}
              </div>
              <br/>
              <div>
                <h3>Synopsis :&nbsp;</h3>
                {film.description}
              </div>
              <br/>
              <div>
                <h3>Length :&nbsp;</h3>
                {film.length}min
              </div>
              <br/>
              <div>
                <h3>Added on :&nbsp;</h3>
                <DateHelper date={film.addedAt}/>
              </div>
            </div>
            <hr/>
            <p styleName="download">
            </p>
            <DownloadBar links={film.downloadLinks}/>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
