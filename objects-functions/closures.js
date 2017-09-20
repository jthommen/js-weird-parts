// Closures

function greet(greeting){
    return function(name){
        console.log(greeting + ' ' + name);
    }
}

// Invoking a function that returns a function
// The returned function gets invoked again
greet('Hi')('Juri');

var sayhi = greet('Hello');
sayhi('Juerg');

// The greet parameter is still there when the returned function is invoked
// Even after the execution context ist popped of the execution stack,
// the variables are still in memory
// Allows to go down the scope chain to find variables,
// even though the execution context of the variable doesn't exist anymore
// Execution context has 'closed in' it's outer variables

// Closures are a feature of the JS programming language


// Famous closure example
function buildFunctions() {
    var arr = [];

    for (var i =0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }

    return arr;
}

// functions get created
var  fs = buildFunctions();
console.log(fs);

// functions are invoked
fs[0](); 
fs[1]();
fs[2]();
// all return 3



// Famous closure example solution with Let (ES6)
function buildFunctions() {
    var arr = [];

    for (var i =0; i < 3; i++) {
        let j = i;
        arr.push(
            function() {
                console.log(j);
            }
        )
    }

    return arr;
}

// functions get created
var  fs2 = buildFunctions();
console.log(fs);

// functions are invoked
// i points do different spot in memory
fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2


// Famous closure example solution with IIFE (ES5)
function buildFunctions() {
    var arr = [];

    for (var i =0; i < 3; i++) {
       arr.push(
           (function(j){
                return function() {
                    console.log(j);
                }
           })(i)
       )
    }

    return arr;
}

// functions get created
var  fs3 = buildFunctions();
console.log(fs);

// functions are invoked
// i points do different spot in memory
fs3[0](); // 0
fs3[1](); // 1
fs3[2](); // 2