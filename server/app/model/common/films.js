'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;
const self = process.env.SERVER_IP;
const ObjectId = Schema.Types.ObjectId;

// eslint-disable-next-line new-cap
const filmSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String, default: 'NA'},
  posterLink: {type: String, required: true},
  productionDate: {type: Date},
  actors:  [{type: String}],
  director: {type: String, required: true},
  country: {type: String, required: true},
  length: {type: Number, required: true},
  downloadLinks:  [{type: ObjectId, ref: 'Link'}],
  addedAt: {type: Date, default: Date.now()},
  uploader: {type: ObjectId, ref: 'User'}
});

const model = mongoose.model('Film', filmSchema);

module.exports = {
  schema: filmSchema,
  model,
  registry: {
    urlTemplates: {
      self: `${self}/api/films/{id}`,
      relationship: `${self}/api/films/{ownerId}/relationships/{path}`
    }
  }
};
