import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';
import {Image} from 'semantic-ui-react';

import styles from './styles.css';
import DateHelper from '../../helpers/date';
import ListEpisodes from '../../components/list-episodes/container';
import NotFound from '../../components/not-found/container';

@CSSModules(styles)
class View extends Component {
  render() {
    const {serie} = this.props;
    if (!serie) {
      return <NotFound type="serie"/>;
    }
    return (
      <DocumentTitle title='Serie'>
        <div styleName='page'>
          <div styleName='container'>
            <h1 styleName="title">{serie.name}</h1>
            <hr/>
            <card styleName="serie_poster">
              <Image src={serie.posterLink} />
            </card>
            <div styleName="info">
              <div>
                <h3>Release :&nbsp;</h3>
                <DateHelper date={serie.productionDate}/>
              </div>
              <div>
                <h3>Director :&nbsp;</h3>
                {serie.director}
              </div><br/>
              <div>
                <h3>Actors :&nbsp;</h3>
                {serie.actors[0]}, {serie.actors[1]}, {serie.actors[2]}
              </div>
              <br/>
              <div>
                <h3>Country :&nbsp;</h3>
                {serie.country}
              </div>
              <br/>
              <div>
                <h3>Synopsis :&nbsp;</h3>
                {serie.description}
              </div>
              <br/>
              <div>
                <h3>Added on :&nbsp;</h3>
                <DateHelper date={serie.addedAt}/>
              </div>
            </div>
            <hr/>
            <ListEpisodes episodes={serie.episodes}/>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
