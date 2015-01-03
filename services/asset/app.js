/**
 * Main asset service runner.
 */

'use strict';


function main() {
    var utility = require("../../lib/utility.js");
    utility.console_header();
    console.log('Starting up asset service.');
    var socket = require("./socket.js");
    var port = process.env.PORT || 9002;
    socket.Listen(port);
}

main();
