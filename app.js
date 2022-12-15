var express = require('express');
var app = express();
var listener = app.listen(3000, function() {
    console.log(listener.address().port);
});
app.get('/', function (req, res) {
    res.send('ページが表示されました！');
});
