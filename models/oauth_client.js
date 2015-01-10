/**
 * OAuth client model.
 */

'use strict';

var db = require('../lib/db.js');

var OAuthClient = db.bookshelf.Model.extend({
    tableName: 'oauth_clients'
});
