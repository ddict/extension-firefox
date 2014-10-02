var {Hotkey} = require('sdk/hotkeys');

var hotkey = {};

module.exports = hotkey;

hotkey.create = function(keys, callback) {
    Hotkey({
        combo: keys,
        onPress: callback
    });
};