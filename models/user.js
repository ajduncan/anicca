/**
 * User model.
 */

'use strict';

var bookshelf = require('../lib/db.js');

var User = bookshelf.Model.extend({
    tableName: 'users'
});
