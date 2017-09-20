// by value (primitives)
var a = 3;
var b;

b = a; // New spot in memory (copies)
a = 2;

console.log(a); // 2
console.log(b); // 3


// by reference (all objects including functions)
var  c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hola'; // mutating/changing the object

console.log(c); // 'hola'
console.log(d); // 'hola'


// by reference as a parameter
function changeGreeting(obj) {
    obj.greeting = 'hello'; // mutate
}

changeGreeting(d);
console.log(c); // 'hello'
console.log(d); // 'hello'


// Exception: Equals operator sets up new memory space (new address)
c = { greeting: 'howdy'}

console.log(c);
console.log(d);