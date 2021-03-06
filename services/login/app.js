/**
 * Login service
 */

'use strict';


function main() {
    var utility = require("../../lib/utility.js");
    utility.console_header();
    console.log('Starting up login service.');
    var socket = require("./socket.js");
    var port = process.env.PORT || 9001;
    socket.Listen(port);
}

main();
