import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';
import {Grid, Image, Checkbox, Message} from 'semantic-ui-react';

import PosterArea from '../../components/poster-area/container';
import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilms: true,
      showSeries: true
    };
  }
  toogleShowFilms() {
    this.setState({showFilms: !this.state.showFilms});
    console.log(this.state.showFilms);
  }
  toogleShowSeries() {
    this.setState({showSeries: !this.state.showSeries});
  }
  render() {
    let films = null;
    let series = null;
    let separator = null;
    if (this.state.showFilms && this.props.films.length) {
      films = (
        <div>
          <h2>
            <Image styleName="imgTitles"
              src="http://s3.amazonaws.com/libapps/accounts/89359/images/film-reel-and-clapperboard.jpg"/>
            Movies
          </h2>
          <PosterArea
            media={this.props.films}
            typeMedia="film"
            maxDisplay={8}
          />
        </div>
      );
    }
    if (this.state.showSeries && this.props.series.length) {
      series = (
        <div>
          <h2>
            <Image styleName="imgTitles"
              src="http://iip.lu/wp-content/uploads/sites/156/2016/04/15700070751_88d83d38fd_o.png"/>
            Series
          </h2>
          <PosterArea
            media={this.props.series}
            typeMedia="serie"
            maxDisplay={8}
          />
        </div>
      );
    }
    if (films && series) {
      separator = <div><hr/></div>;
    }
    return (
      <DocumentTitle title="Home">
        <div styleName="page">
          <h1 styleName="center">Results for: {this.props.search}</h1>
          <Message floating>
            <div styleName="select-choice-area">
              <Checkbox toggle styleName="checkbox"
                label="Films"
                defaultChecked={true}
                onChange={() => {
                  this.toogleShowFilms();
                }}/>
              <Checkbox toggle
                label="Series"
                defaultChecked={true}
                onChange={() => {
                  this.toogleShowSeries();
                }}/>
            </div>
          </Message>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
              </Grid.Column>
              <Grid.Column width={10}>
                {films}
                {separator}
                {series}
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
