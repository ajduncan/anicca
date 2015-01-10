/**
 * oauth access token model.
 */

'use strict';

var db = require('../lib/db.js');

var OAuthAccessToken = db.bookshelf.Model.extend({
    tableName: 'oauth_access_tokens'
});
