'use strict';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Schema = mongoose.Schema;
const self = process.env.SERVER_IP;
const ObjectId = Schema.Types.ObjectId;

// eslint-disable-next-line new-cap
const linkSchema = new Schema({
  host: {type: String},
  link: {type: String, required: true},
  quality: {type: String, required: true},
  language: {type: String, required: true},
  uploader: {type: ObjectId, ref: 'User', required: true}
});

const model = mongoose.model('Link', linkSchema);

module.exports = {
  schema: linkSchema,
  model,
  registry: {
    urlTemplates: {
      self: `${self}/api/links/{id}`,
      relationship: `${self}/api/links/{ownerId}/relationships/{path}`
    }
  }
};
