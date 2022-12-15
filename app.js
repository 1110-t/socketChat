var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static('public'));
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send('something');
  });
  ws.send('something');
});

var listener = app.listen(3000, function() {
    console.log(listener.address().port);
});
app.get('/', function(req, res) {
    fs.readFile("./index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
});
