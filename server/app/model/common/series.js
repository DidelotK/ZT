'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const self = process.env.SERVER_IP;

// eslint-disable-next-line new-cap
const serieSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String, default: 'NA'},
  posterLink: {type: String, required: true},
  productionDate: {type: Date, required: true},
  actors: [{type: String}],
  director: {type: String, required: true},
  country: {type: String, required: true},
  episodes: [{type: ObjectId, ref: 'Episode'}],
  addedAt: {type: Date, default: Date.now()},
  uploader: {type: ObjectId, ref: 'User', required: true}
});

const model = mongoose.model('Serie', serieSchema);

module.exports = {
  schema: serieSchema,
  model,
  registry: {
    urlTemplates: {
      self: `${self}/api/series/{id}`,
      relationship: `${self}/api/series/{ownerId}/relationships/{path}`
    }
  }
};
