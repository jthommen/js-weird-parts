// Everything leads to a base object in js

// prototype of the base object is null

var a = {}; // Bottom of prototype chain is the base object with own properties & methods

// Bottom of prototype chain is the base function with own properties & methods
var b = function(){ };  // example methods: bind, apply, call

// Bottom of prototype chain is the base array with own properties & methods
var c = []; // example methods: push, map, pop

// Access to those methods are given through the automatic prototype setting 