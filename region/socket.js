/**
 * socket.js
 */

module.exports = {};

module.exports.Listen = function() {
    var port = process.env.PORT || 9000;
    var net = require('net');
    var server = net.createServer(function(client) {
        console.log('Client connected.');
        // get position

        client.on('end', function() {
            console.log('Client disconnected.');
        });

        client.on('data', function(data) {
            console.log('client message: %s', data);
        });

        client.write('hello! \r\n');
    });

    server.listen(port, function() {
        console.log('Listening for connections on port %s.', port);
    });

}
