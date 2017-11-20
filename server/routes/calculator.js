var express = require('express');
var router = express.Router();

var mathResult = 0;

var mathObject = {};

var mathOperator;

router.post('/', function(req, res) {
    console.log('this is the req.body from the router file', req.body);

    // do some math!
    var firstNumber = parseInt(req.body.numOne);
    var secondNumber = parseInt(req.body.numTwo);
    switch(req.body.oper) {
        case 'add':
            mathOperator = '+';
            mathResult = firstNumber + secondNumber;
            break;
        case 'subtract':
            mathOperator = '-';
            mathResult = firstNumber - secondNumber;
            break;
        case 'multiply':
            mathOperator = 'x';
            mathResult = firstNumber * secondNumber;
            break;
        case 'divide':
            mathOperator = '/';
            mathResult = firstNumber / secondNumber;
            break;
    }

    // add current math to object/array
    mathObject = {
        first: firstNumber,
        second: secondNumber,
        operator: mathOperator,
        result: mathResult
    };

    res.sendStatus(200);
});

router.get('/', function(req, res) {
    res.send({result: mathResult, history: mathObject});
});

module.exports = router;