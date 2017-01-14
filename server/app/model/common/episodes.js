'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const self = process.env.SERVER_IP;

// eslint-disable-next-line new-cap
const episodeSchema = new Schema({
  saison: {type: Number, required: true},
  number: {type: Number, required: true},
  name: {type: String, required: true},
  resume: {type: String, required: true},
  downloadLinks:  [{type: ObjectId, ref: 'Link'}],
  addedAt: {type: Date, default: Date.now()},
  uploader: {type: ObjectId, ref: 'User', required: true}
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
