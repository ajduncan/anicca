'use strict';


function main() {
    console.log('herp');
    var game = require("./game.js");
    var world = require("./world.js");
    var socket = require("./socket.js");

    game.GameLoop();
    world.WorldLoop();
    socket.Listen();
}

main();