/**
 * Utility helpers.
 */

'use strict';

module.exports = {};

module.exports.console_header = function() {
    var ansi = require('ansi'),
        cursor = ansi(process.stdout);

    var header = (function() {/*
             _               
  __ _ _ __ (_) ___ ___ __ _ 
 / _` | `_ \| |/ __/ __/ _` |
| (_| | | | | | (_| (_| (_| |
 \__,_|_| |_|_|\___\___\__,_|
                             
    */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

    cursor.grey().write(header + '\n');

    cursor.reset();

}
