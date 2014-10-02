//firefox
var self          = require('sdk/self');
var notifications = require('sdk/notifications');
var data          = require('sdk/self').data;
var storage       = require('sdk/simple-storage').storage;
var window        = require('sdk/window/utils').getMostRecentBrowserWindow();

var Firefox = {
    reason: self.loadReason
};

module.exports = Firefox;

//local
var Event = require('./event');
Event(Firefox);

Firefox.tab          = require('./tab');
Firefox.context_menu = require('./context_menu');
Firefox.content      = require('./content');
Firefox.popup        = require('./popup');
Firefox.hotkey       = require('./hotkey');

//notification
Firefox.notify = function(opt, callback) {
    opt = {
        title:      opt.title || 'Extension',
        text:       opt.data,
        iconURL:    data.url(opt.icon)
    };

    notifications.notify(opt);
    if(callback) {
        callback();
    }
};

Firefox.playAudio = function(url) {
    audio     = new window.Audio;
    audio.src = url;
    audio.play();
};

Firefox.set = function(key, value) {
    if(!value) {
        var obj = key;
        var keys = Object.keys(obj);

        for(var i = 0; i < keys.length; i++) {
            storage[keys[i]] = obj[keys[i]];
        }
    } else {
        storage[key] = value;
    }
};

Firefox.get = function(key) {
    if(!key) {
        return storage;
    }

    return storage[key];
};

