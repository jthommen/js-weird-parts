// Operators

var a = 3 + 4;

// same as
function plus(a, b) {
    return // add the two #s
}
console.log(a);

// Operators are special functions
// Wrote in 'infix notation': Function name sits between the two parameters (3 + 4)
// 'prefix notation': (+3 4)
// 'postfix notation': (3 4+)

// Operators: +, -, *, /, ==, ===, <=, <==, >=, >==, %

// Operator Precedence
// 0-19

// Tip: If unsure about precedence, put code to run first in parenthesis (precedence 19)


// Comparison Operators

console.log(1 < 2  < 3); // true
// (true < 3)
// (1 < 3) true gets coerced into 1
// true

console.log(3 < 2 < 1);  // true
// (false < 1)
// (0 < 1) false gets coerced into 0
// true


// Strict Equality  (===)
// same value AND same type --> no coercion allowed

// Tip: 99% of the time use === instead of == to not get weird result with type coercion
