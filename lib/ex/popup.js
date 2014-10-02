var {ToggleButton} = require('sdk/ui/button/toggle');
var panels         = require('sdk/panel');
var data           = require('sdk/self').data;

var popup = {};

module.exports = popup;

popup.create = function(opt, callback) {
    var button = ToggleButton({
        id:     opt.title,
        label:  opt.title,
        icon: {
            '16': './' + opt.icon,
            '32': './' + opt.icon,
            '64': './' + opt.icon
        },
        onChange: handleChange
    });

    var option = {
        contentURL: data.url('popup/' + opt.html),
        onHide: handleHide,
        contentScriptFile: opt.js.map(function(ele) {return data.url('popup/' + ele);})
    };

    if(opt.css) {
        option.contentStyleFile  = opt.css.map(function(ele) {return data.url('popup/' + ele);});
    }

    var panel = panels.Panel(option);

    callback(panel);

    function handleChange(state) {
        if(state.checked) {
            panel.show({
                position: button
            });
        }
    }

    function handleHide() {
        button.state('window', {checked: false});
    }
}