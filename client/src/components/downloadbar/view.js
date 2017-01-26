import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import {Table, Button} from 'semantic-ui-react';

import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    const links = this.props.links;
    if (!links) {
      return (
        <div>
          No links
        </div>
      );
    }
    const downloadLinks = [];
    links.forEach(link => {
      downloadLinks.push(
        <Table.Row key={downloadLinks.length}>
          <Table.Cell>{link.language}</Table.Cell>
          <Table.Cell>{link.quality}</Table.Cell>
          <Table.Cell>{link.host}</Table.Cell>
          <Table.Cell>{link.uploader.pseudo}</Table.Cell>
          <Table.Cell>
            <a href={link.link}>
              <Button color="red" size="small">DOWNLOAD</Button>
            </a>
          </Table.Cell>
        </Table.Row>
      );
    });
    return (
      <div styleName="container">
        <Table styleName="table_links">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Language</Table.HeaderCell>
              <Table.HeaderCell>Format</Table.HeaderCell>
              <Table.HeaderCell>Host</Table.HeaderCell>
              <Table.HeaderCell>Uploader</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {downloadLinks}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
export default View;
