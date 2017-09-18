// Concept of 'undefined'
var a;
console.log(a);

// 'Not defined' is not equal to 'undefined'
// 'undefined' = special keyword/value meaning variable hasn't been set
// Main concept: Declaration vs. defining/setting a value
if (a === undefined ) {
    console.log('a is undefined');
} else {
    console.log('a is defined');
}

// WARNING: Never set a variable to undefined
// Helps you debugging code if you don't set variables to undefined