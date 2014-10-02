var data    = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

var content = {};

module.exports = content;

content.create = function(opt, callback) {
    var option = {
        include: opt.matches || ['*'],
        contentScriptFile: opt.js.map(function(ele) {return data.url('content/' + ele);}),
        onAttach: callback
    };

    if(opt.css) {
        option.contentStyleFile  = opt.css.map(function(ele) {return data.url('content/' + ele);});
    }

    pageMod.PageMod(option);
};