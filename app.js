var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.logger());

console.log('listen on port 8000');
app.listen(8000);
