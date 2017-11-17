var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var calc = require('./routes/calculator');

var port = 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.use('/calc', calc);

app.listen(port, function() {
    console.log('Listening on port:', port);
});