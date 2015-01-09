var pg = require('pg');
var config = require('config');
var db = '';

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

module.exports = db;