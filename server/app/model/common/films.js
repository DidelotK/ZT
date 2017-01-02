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
  posterLink: {type: String},
  productionDate: {type: Date},
  actors:  [{type: String}],
  addedAt: {type: Date, default: Date.now()},
  downloadLink:  [{ type: ObjectId, ref: 'Link' }]
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
