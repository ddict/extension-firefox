var ex = require('./ex/index');

// console.log(ex.reason);

// ex.on('select', function(text) {
//     console.log(text);
// });

// ex.hotkey.create('alt-shift-d', function() {
//     panel.show();
// });

// ex.popup.create({
//     title: 'ddict',
//     icon: 'icon.png',
//     html: 'index.html',
//     js: ['index.js'],
//     css: ['style.css']
// }, function(panel) {
//     panel.port.on('haha', function(data) {
//         console.log(data);
//     });
// });

// ex.content.create({
//     js: ['index.js'],
//     css: ['style.css']
// }, function(worker) {
//     // console.log(worker);
// });

// ex.notify({
//     title: 'Ddict',
//     data: 'hello',
//     icon: 'icon.png'
// });

// ex.playAudio('https://translate.google.com/translate_tts?ie=UTF-8&q=hello&tl=en&total=1&idx=0&textlen=5&client=t');

ex.tab.create('http://example.com');

// ex.context_menu.create({
//     title: 'Translate with Ddict',
//     icon: 'icon.png'   
// }, function(data) {
//     console.log(data);
// });

// ex.set('data', 'atad');
// ex.set({
//     one: 1,
//     'true': false,
//     'data': {1: 'haha', 2: 'hoho'}
// });
// console.log(ex.get());
