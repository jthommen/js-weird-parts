// Immediately invoked function expressions (IIFE)

// Function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('Juri');


// Function expression
var greetFunc = function(name) {
    console.log('Hello ' + name );
};
greetFunc('Juri');


// IIFE
var greeting = function(name) {
    return ('Hello ' + name);
}('Juri');
// Function is invoked immediately after creation

console.log(greeting); // Greeting contains a string because function is invoked already and returns a string


// Standalone IIFE
3; // valid expression
'I am a string' // valid
{ // valid
    name: 'Juri'
};

// function(name) {    // expects a name, can't be anonymous
//     return 'Hallo ' + name;
// }

// Paranthesis are an operator for grouping expressions, not statements
(function(name) {   // valid
    var greeting = 'Hello';
    console.log( greeting + ' ' + name);
})('Juri');

// IIFEs are often used to make code safe
// library code is put inside and IIFE
// There is no memory space set aside during creation phase of the global execution context
// Calling of the function expression creates a new execution context of the anoynomous function
// Variables don't interfere with other variables in the global oder other name spaces
