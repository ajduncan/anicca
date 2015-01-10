/**
 * Database connection and helpers.
 */

'use strict';

module.exports = {};

var pg = require('pg');
var config = require('config');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : config.get('database.host'),
    user     : config.get('database.user'),
    password : config.get('database.pass'),
    database : config.get('database.name'),
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports.knex = knex;
module.exports.bookshelf = bookshelf;
