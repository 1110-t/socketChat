var express = require('express');
var app = express();
var fs = require('fs');
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
