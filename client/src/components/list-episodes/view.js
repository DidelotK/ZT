import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {Table, Button, Modal} from 'semantic-ui-react';

import DownloadBar from '../../components/downloadbar/container';
import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    const content = [];
    const {episodes} = this.props;
    if (!episodes) {
      return (
        <div>
          No episode
        </div>
      );
    }
    const saisons = [];
    episodes.forEach(episodes => {
      if (saisons.indexOf(episodes.saison) === -1) {
        saisons.push(episodes.saison);
      }
    });
    saisons.sort();
    saisons.forEach(saison => {
      const subContent = [];
      const episodesInSaison = episodes.filter(episodes => {
        return episodes.saison === saison;
      });
      episodesInSaison.sort();
      episodesInSaison.forEach(episode => {
        subContent.push(
          <Table.Row key={subContent.length}>
            <Table.Cell>{episode.number}</Table.Cell>
            <Table.Cell>{episode.name}</Table.Cell>
            <Table.Cell>
              <Modal trigger={<Button>Show resume</Button>}>
                <Modal.Header>Resume</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <p>
                      {episode.resume}
                    </p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Table.Cell>
            <Table.Cell>
              <Modal
                trigger={<Button color="red" size="small">DOWNLOAD</Button>}>
                <Modal.Header>Download</Modal.Header>
                <Modal.Content>
                  <DownloadBar links={episode.downloadLinks}/>
                </Modal.Content>
              </Modal>

            </Table.Cell>
          </Table.Row>
        );
      });
      content.push(
        <div key={content.length}>
          <h2 styleName="title">Saison {saison}</h2>
          <Table styleName="table">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Number</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Resume</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {subContent}
            </Table.Body>
          </Table>
        </div>
      );
    });

    return (
      <div>
        {content}
      </div>
    );
  }
}
export default View;
