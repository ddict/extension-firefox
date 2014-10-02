var tabs = require('sdk/tabs');

var tab = {};

module.exports = tab;

tab.create = function(url, callback) {
    tabs.open(url);

    if(callback) {
        callback();
    }
};