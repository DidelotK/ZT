'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const self = process.env.SERVER_IP;

// eslint-disable-next-line new-cap
const episodeSchema = new Schema({
  saison: {type: Number, required: true},
  episodeNumber: {type: Number, required: true},
  downloadLink:  [{ type: ObjectId, ref: 'Link' }]
});

const model = mongoose.model('Episode', episodeSchema);

module.exports = {
  schema: episodeSchema,
  model,
  registry: {
    urlTemplates: {
      self: `${self}/api/episodes/{id}`,
      relationship: `${self}/api/episodes/{ownerId}/relationships/{path}`
    }
  }
};
