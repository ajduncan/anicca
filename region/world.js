/**
 * world.js
 */

module.exports = {};

module.exports.WorldLoop = function() {
    setInterval(function() {
        console.log('world: tock');
    }, 1000);
}
