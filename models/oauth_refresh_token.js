/**
 * OAuth refresh token model.
 */

'use strict';

var db = require('../lib/db.js');

var OAuthRefreshToken = db.bookshelf.Model.extend({
    tableName: 'oauth_refresh_tokens'
});
