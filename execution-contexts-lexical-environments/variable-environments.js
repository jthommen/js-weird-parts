// Variable Environments

function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar);    
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar); // back to 1

// Every execution context has it's own variable environment
// Value of var travels through execution environments:
// Global: myVar = 1;
// a: myVar = 2;
// b: myVar  = undefined;
// Scope: Where we can see the variable
// All myVar's are unique, distinct