
// gets a new object (the architecture allows us to not have to use the 'new keyword here)
var g = g$('Juri', 'Thommen');

// use our chainable methods
g.greet().greet('formal').setLanguage('es').greet(true).log();

// another custom method
g.setGreeting('#greeting', false);

// let's use our object on the click of the login button
$('#login').click(function() {

    // creates a new greetr object
    // let's pretend we know the name from the login
    var loginGreeter = g$('John', 'Doe');

    // hide the login on the screen
    $('#logindiv').hide();

    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language
    // log the welcome as well
    loginGreeter.setLanguage($('#lang').val()).setGreeting('#greeting', false).log();

});