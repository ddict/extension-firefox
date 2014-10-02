var contextMenu = require('sdk/context-menu');
var data        = require('sdk/self').data;

var context_menu = {};

module.exports = context_menu;

context_menu.create = function(opt, callback) {
    opt.label         = opt.title;
    opt.image         = data.url(opt.icon);
    opt.context       = opt.contexts || contextMenu.SelectionContext();
    opt.onMessage     = callback;
    opt.contentScript = 'self.on("click", function() {' +
        '  var text = window.getSelection().toString();' +
        '  self.postMessage(text);' +
        '});';

    contextMenu.Item(opt);
};