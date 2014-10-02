var self      = require('sdk/self');
var selection = require('sdk/selection');

var Emitter = require('./emitter');

module.exports = Event;

function Event(Firefox) {
    Emitter(Firefox);
    
    selection.on('select', function () {
        Firefox.emit('select', selection.text);
    });
}