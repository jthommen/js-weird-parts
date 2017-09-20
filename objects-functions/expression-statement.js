// Expressions & Statements

a = 3;
// 1 + 2;

a = { greeting: 'hi' };


// Statement
// no value is returned
// if statement takes an expression
if (a === 3) {

}

// Function Statement
// doesn't result in a value
function greet() {
    console.log('hi');
}
greet();

// Function Expression
// Anonymous function creates function object that results in a value that is assigned to a variable
// Function expression aren't hoisted, only the variable is, not the function
var greet2 = function() {
    console.log('hi');
}
greet2();