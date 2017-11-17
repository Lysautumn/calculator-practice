var express = require('express');
var router = express.Router();

var mathResult = 0;

router.post('/', function(req, res) {
    console.log('this is the req.body from the router file', req.body);

    // do some math!
    var firstNumber = parseInt(req.body.numOne);
    var secondNumber = parseInt(req.body.numTwo);
    switch(req.body.oper) {
        case 'add':
        mathResult = firstNumber + secondNumber;
        break;
    }

    res.sendStatus(200);
});

router.get('/', function(req, res) {
    res.send({result: mathResult});
});

module.exports = router;