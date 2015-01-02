'use strict';


function main() {
    var utility = require("../lib/utility.js");
    utility.console_header();
    var game = require("./game.js");
    var world = require("./world.js");
    var socket = require("./socket.js");

    game.GameLoop();
    world.WorldLoop();
    socket.Listen();
}

main();