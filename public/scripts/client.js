console.log('client.js working!');

$(document).ready(onReady);

function onReady() {
    // event listeners
    $('.calcButton').on('click', function() {
        console.log('add button clicked!');
        // get values off of inputs and button
        var valOne = $('#firstNum').val();
        var valTwo = $('#secondNum').val();
        var operator = $(this).data('oper');
        
        console.log('This is the first value', valOne);
        console.log('This is the second value', valTwo);
        console.log('This is the operator', operator);
        calculation(valOne, valTwo, operator);
    });
}

function calculation(first, second, oper) {
    var mathQuery = {numOne: first, numTwo: second, oper: oper};
    $.ajax({
        method: 'POST',
        url: '/calc',
        data: mathQuery,
        success: function(response) {
            console.log('this is the response from the server from calculation function', response);
        },
        error: function(error) {
            console.log('there was an error in the calculation function', error);
        }
    });
}