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
    $('#clear').on('click', function(){
        console.log('clear button clicked!');
        $('#firstNum').val('');
        $('#secondNum').val('');
        $('#solution').text('0');
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
            getResults();
        },
        error: function(error) {
            console.log('there was an error in the calculation function', error);
        }
    });
}

function getResults() {
    $.ajax({
        method: 'GET',
        url: '/calc',
        success: function(response) {
            console.log('This is the response from the getResults function', response);
            $('#solution').text(response.result);
            $('#history').append('<p>' + response.history.first + ' ' + response.history.operator + ' ' + response.history.second + ' = ' + response.history.result + '</p>');
        },
        error: function(error) {
            console.log('Error in the getResults function', error);
        }
    });
}