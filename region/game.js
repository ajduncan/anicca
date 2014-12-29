/**
 * game.js
 */

module.exports = {};

module.exports.GameLoop = function() {
    setInterval(function() {
        console.log('game: tick');
    }, 1000);
}
