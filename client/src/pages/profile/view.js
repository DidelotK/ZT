import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import DocumentTitle from 'react-document-title';
import {Button} from 'semantic-ui-react';
import {Image} from 'semantic-ui-react'
import { Table } from 'semantic-ui-react'

import styles from './styles.css';

@CSSModules(styles)
class View extends Component {
  render() {
    return (
      <DocumentTitle title='Profile'>
        <div styleName='page'>
          <div styleName='container'>
            <h1>Profile</h1>
            <div styleName='info'>
              <div styleName='texts'>
              <h2 styleName='name'>Benjamin</h2>
              <h3 styleName='files'>Files Uploaded : 12</h3>
              </div>

              <div styleName='userPic'>
                <Image
                  src='/assets/images/user.png' />
              </div>
              <Button color='green'
                      onClick={() => {this.props.redirect('/add/film');}}>
                Add media
              </Button>
              <Button color='yellow'
                      onClick={() => {}}>
                Update Name
              </Button>
              <Button color='red'
                      onClick={() => {}}>
                Delete account
              </Button>
            </div>

            <div styleName='uploads'>
              <h3>Films Uploaded:</h3>
            <Table singleLine >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Rogue One</Table.Cell>
                  <Table.Cell>09/01/2017</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Le Fondateur</Table.Cell>
                  <Table.Cell>10/01/2017</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
              <h3>Series Uploaded:</h3>
              <Table singleLine >
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Breaking Bad</Table.Cell>
                    <Table.Cell>11/01/2017</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Arrow</Table.Cell>
                    <Table.Cell>12/01/2017</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>

              </div>


          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default View;
