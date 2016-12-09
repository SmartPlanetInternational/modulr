/**
* Module.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');

module.exports = _.merge(_.cloneDeep(require('./base')), {

  attributes: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    icon: {
      type: 'string',
      defaultsTo: ''
    },
    state: {
      type: 'string',
      defaultsTo: null
    },
    url: {
      type: 'string',
      defaultsTo: null
    },
    order: {
      type: 'integer'
    },
    active: {
      type: 'boolean',
      defaultsTo: true
    },
    lock: {
      type: 'boolean',
      defaultsTo: false
    },
    submodules: {
      type: 'array',
      defaultsTo: []
    }
  }

});
