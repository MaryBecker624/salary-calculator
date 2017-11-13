console.log('sourced');

$(document).ready(function() {
    console.log('working!');

    $('#submitButton').on('click', function(){
        var $monthlyCost = $('#mySalary').val()/12; //kept inside this function so we can access this value when we append it to DOM
        
       $('#appendDiv').append('<p>First Name: ' + $('#myFirstName').val() + '</p>'); //appending first name input to DOM
       $('#appendDiv').append('<p>Last Name: ' + $('#myLastName').val() + '</p>'); //appending last name input to DOM
       $('#appendDiv').append('<p>ID Number: ' + $('#myID').val() + '</p>'); //appending ID number input to DOM
       $('#appendDiv').append('<p>Job Title: ' + $('#myJob').val() + '</p>'); //appending job input to DOM
       $('#appendDiv').append('<p>Annual Salary: ' + $('#mySalary').val() + '</p>'); //appending salary to DOM
       $('#appendDiv').append('<p>Total Monthly Cost: ' + $monthlyCost + '</p>'); //appending the monthly cost to DOM
       $('input').val('');   //removing the text from the input fields when button is clicked
    })

    $('#deleteButton').on('click',function(){
        $('p').remove();
    })
    
    // $('body').css('background-color', 'blue');  //just a test. it worked
});