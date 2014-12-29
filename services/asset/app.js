/**
 * Main asset service runner.
 */

'use strict';


function main() {
    console.log('Starting up asset service.');
    var socket = require("./socket.js");
    var port = process.env.PORT || 9000;
    socket.Listen(port);
}

main();
