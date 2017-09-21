// Built-in function constructors

// Create objects with methods and the boxed primitive inside
var a = new Number(5); // creates object with number 3 inside

var b = new String('Juri'); // creates object with string inside

var c = new Date('3/1/2017'); // crates date object

// Adding to a build-in function constructor
// all strings have access to this new function
// many frameworks use this approach to extend the js language
String.prototype.isLengthGreatherThan = function(limit) {
    return this.length > limit;
}
console.log(b.isLengthGreatherThan(3));

// Confusing because those objects look like primitives, but are objects

// Tip: Use momentjs if working with dates a lot

// Warning: Can be dangerous
// because aren't real primitives === fails (primitive compared to object)