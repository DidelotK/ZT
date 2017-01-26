import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

class View extends Component {
  render() {
    return (
      <Menu vertical>
        <Menu.Item>
          Film
          <Menu.Menu>
            <Menu.Item name="add_film"
              onClick={() => {
                this.props.redirect('/add/film');
              }}>
              Add
            </Menu.Item>
            <Menu.Item name="update_film"
              onClick={() => {
                this.props.redirect('/update/film');
              }}>
              Update
            </Menu.Item>
            <Menu.Item name="remove_film"
              onClick={() => {
                this.props.redirect('/delete/film');
              }}>
              Delete
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          Serie
          <Menu.Menu>
            <Menu.Item name="add_serie"
              onClick={() => {
                this.props.redirect('/add/serie');
              }}>
              Add
            </Menu.Item>
            <Menu.Item name="update_serie"
              onClick={() => {
                this.props.redirect('/update/serie');
              }}>
              Update
            </Menu.Item>
            <Menu.Item name="remove_serie"
              onClick={() => {
                this.props.redirect('/delete/serie');
              }}>
              Delete
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          Episode
          <Menu.Menu>
            <Menu.Item name="add_episode"
              onClick={() => {
                this.props.redirect('/add/episode');
              }}>
              Add
            </Menu.Item>
            <Menu.Item name="update_episode"
              onClick={() => {
                this.props.redirect('/update/episode');
              }}>
              Update
            </Menu.Item>
            <Menu.Item name="remove_episode"
              onClick={() => {
                this.props.redirect('/delete/episode');
              }}>
              Delete
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          Link
          <Menu.Menu>
            <Menu.Item name="add_link"
              onClick={() => {
                this.props.redirect('/add/link');
              }}>
              Add
            </Menu.Item>
            <Menu.Item name="remove_link"
              onClick={() => {
                this.props.redirect('/delete/link');
              }}>
              Delete
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>

    );
  }
}
export default View;
