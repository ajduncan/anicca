'use strict';

/**
 * socket.js
 */

module.exports = {};

module.exports.Listen = function(port) {
    var net = require('net');
    var asset_server = net.createServer(function(client) {
        console.log('Client connected.');
        client.write('Connected to asset service.\r\n');

        client.on('end', function() {
            console.log('Client disconnected.');
        });

        client.on('data', function(data) {
            console.log('client message: %s', data);
            client.write('Thanks for that message.\n');
        });

    });

    asset_server.listen(port, function() {
        console.log('Listening for connections on port %s.', port);
    });

}
