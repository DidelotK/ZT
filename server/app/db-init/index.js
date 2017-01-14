'use strict';
const UsersInit = require('./users').init;
const LinksInit = require('./links').init;
const FilmsInit = require('./films').init;
const SeriesInit =  require('./series').init;
const EpisodeInit = require('./episodes').init;

const db = {
  init() {
    // To populate the database in order to test
    let uploader;
    let allLinks;
    let allEpisodes;
    UsersInit()
      .then(user => {
        uploader = user;
        console.log('Users saved successfully');
        return LinksInit(uploader);
      })
      .then(links => {
        console.log('Links saved successfully');
        allLinks = links;
        return FilmsInit(uploader, allLinks);
      })
      .then(() => {
        console.log('Films saved successfully');
        return EpisodeInit(uploader, allLinks);
      })
      .then(episodes => {
        console.log('Episodes saved successfully');
        allEpisodes = episodes;
        return SeriesInit(uploader, allEpisodes);
      })
      .then(() => {
        console.log('Series saved successfully');
      })
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = db;
