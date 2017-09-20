// Closures & Callbacks

function greetLater() {
    var greeting = 'Hi';

    // Set timeout uses closures to access the variable after a defined amount of time
    setTimeout(function(){ // setTimeout takes function as a parameter function is created on the fly -> function expression
        console.log(greeting); // greeting doesn't exist in the execution context, js looks for it in the scope chain -> closure
    }, 3000); // second parameter the time to wait
}

greetLater();

// jQuery uses function expresions and first-class functions!
// $('button').click(function() {
//
//});

// Callback Example
function tellMeWhenDone(callback) {

    var a = 1000; // some work
    var b = 2000; // some work

    callback(); // the 'callback', it runs the function I give it
}

tellMeWhenDone(function(){
    console.log("I'm done!");
});

tellMeWhenDone(function(){
    console.log("I'm done too!");
});