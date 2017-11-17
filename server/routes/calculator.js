var express = require('express');
var router = express.Router();

var mathResult = 0;

router.post('/', function(req, res) {
    console.log('this is the req.body from the router file', req.body);
    res.sendStatus(200);
});

module.exports = router;