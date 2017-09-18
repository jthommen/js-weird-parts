// Scope Chain
function b() {
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

// 1 --> global execution context
// 2 --> a execution context
// 1 --> couldn't find in b execution context so took global execution context

// Works because every execution context has a reference to it's outer (lexical) environment
// Doesn't has to be execution context below in the stack
// Refers to the lexical environment, e.g. b is inside global environment