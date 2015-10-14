var WebSocketServer = require('ws').Server
var wamp = require('../../lib/wamp.io');

//
// Turn debugging on
//
wamp.debug(true, true);

var wss = new WebSocketServer({ port: 8080 });
console.log('now listening');
var app = wamp.attach(wss);


app.on('publish', function(topicUri, event, exclude) {
    console.log('onPublish   topicUri:'+topicUri+', event:'+ event);
});