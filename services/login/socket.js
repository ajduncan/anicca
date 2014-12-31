'use strict';

/**
 * socket.js
 */

module.exports = {};

module.exports.Listen = function(port) {
    var express = require('express');
    var bodyParser = require('body-parser');
    var oauthserver = require('node-oauth2-server');
    
    var app = express();
    var memorystore = require('./model.js');

    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use(bodyParser.json());
    app.oauth = oauthserver({
      model: memorystore,
      grants: ['password','refresh_token'],
      debug: true
    });

    app.all('/oauth/token', app.oauth.grant());

    app.get('/', app.oauth.authorise(), function (req, res) {
      res.send('Secret area');
    });

    app.use(app.oauth.errorHandler());

    app.listen(port);
    console.log('Listening on port %s', port);

}
