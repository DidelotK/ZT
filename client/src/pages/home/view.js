import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';
import {Grid, Image} from 'semantic-ui-react';

import PosterArea from '../../components/poster-area/container';
import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <DocumentTitle title="Home">
        <div styleName="page">
          <h1 styleName="center">Zone Téléchargement</h1>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image
                  src="/assets/images/logo.jpg" />
              </Grid.Column>
              <Grid.Column width={13} styleName="container">
                <div styleName="description">
                  <h2>Zone téléchargement is BACK</h2>
                  <p>
                    <b>Zone téléchargement</b>
                    <br/>
                    Freedom of streaming and free download! Download free
                    movies, streaming and torrent ... it's you, who decide! On
                    download zone, discover a new way of living your passion for
                    streaming! Download free and enjoy valuable quality links!
                  </p>
                  <p>
                    <b>Need of experienced uploaders</b>
                    <br/>
                    The download zone team is looking for encoders/
                    uploaders of experienced exclusives. You think you have the
                    profile? Apply right now by clicking here, we
                    will examine your application as soon as possible.
                  </p>
                </div>
              </Grid.Column>

            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={16}><hr/></Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3}>
              </Grid.Column>
              <Grid.Column width={10}>
                <h2>
                  <Image styleName="imgTitles"
                    src="http://s3.amazonaws.com/libapps/accounts/89359/images/film-reel-and-clapperboard.jpg"/>
                  Latest Movies
                </h2>
                <PosterArea
                  media={this.props.films}
                  typeMedia="film"
                  maxDisplay={8}
                />
                <hr/>
                <h2>
                  <Image styleName="imgTitles"
                    src="http://iip.lu/wp-content/uploads/sites/156/2016/04/15700070751_88d83d38fd_o.png"/>
                  Latest Series
                </h2>
                <PosterArea
                  media={this.props.series}
                  typeMedia="serie"
                  maxDisplay={8}
                />
              </Grid.Column>
              <Grid.Column width={3}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
