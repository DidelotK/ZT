import React, {Component} from 'react';
import {Link} from 'react-router';
import {Grid, Image, Card} from 'semantic-ui-react';

import DateHelper from '../../helpers/date';

class View extends Component {
  render() {
    let cards = [];
    const content = [];
    const films = this.props.films;
    if (films) {
      films.forEach(film => {
        const link = `/film/${film.id}`;
        cards.push(
          <Grid.Column key={cards.length}>
            <Link to={link}>
              <Card >
                <Image src={film.attributes.posterLink} />
                <Card.Content>
                  <Card.Header>{film.attributes.name}</Card.Header>
                  <Card.Meta>
                    Added the:
                    <DateHelper date={film.attributes.addedAt}/>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Link>
          </Grid.Column>
        );
        if (cards.length % 4 === 0) {
          content.push(
            <Grid.Row columns={4} key={content.length}>
              {cards}
            </Grid.Row>
          );
          cards = [];
        }
      });
      if (cards) {
        content.push(
          <Grid.Row columns={4} key={content.length}>
            {cards}
          </Grid.Row>
        );
      }
    }
    return (
      <Grid>
        {content}
      </Grid>
    )
  }
}
export default View;
