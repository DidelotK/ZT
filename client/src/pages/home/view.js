import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';
import {Grid, Image} from 'semantic-ui-react'

import HomeLatestFilm from '../../components/home-latest-film/container';
import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <DocumentTitle title='Home'>
        <div styleName='page'>
          <h1 styleName="center">Zone Téléchargement</h1>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image
                  src='http://img4.hotnessrater.com/22363/mia-malkova.jpg?w=0&h=0' />
              </Grid.Column>
              <Grid.Column width={13} styleName='container'>
                <div styleName='description'>
                  <h2>Zone téléchargement is BACK</h2>
                  <p>
                    <b>Zone téléchargement:</b>
                    <br/>
                    La Liberté Du Streaming Et Téléchargement Gratuit!
                    Téléchargement de films gratuit, streaming et torrent… c’est
                    vous, qui décidez ! Sur Zone téléchargement, découvrez une
                    nouvelle façon de vivre votre passion du streaming !
                    Téléchargez gratuitement et profiter de liens valides de
                    qualité !
                  </p>
                  <p>
                    <b>Besoin D'uploadeurs Expérimentés:</b>
                    <br/>
                    L'équipe de Zone téléchargement est la recherche d'encodeurs /
                    uploadeurs d'exclusivités expérimentés. Vous pensez avoir le
                    profil ? Postulez tout de suite en cliquant ici, nous
                    examinerons vos candidatures dans les plus brefs délais.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3}>
                <Image src='http://semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
              <Grid.Column width={10}>
                <HomeLatestFilm />
              </Grid.Column>
              <Grid.Column width={3}>
                <Image src='http://semantic-ui.com/images/wireframe/image.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
