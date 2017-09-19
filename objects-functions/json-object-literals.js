// JSON vs. Object Literals

// Object literal
var objectLiteral = {
    firstname: 'Juri',
    isAProgrammer: true
};

console.log('This is a js object literal:')
console.log(objectLiteral);

// XML historic format
//<object>
//    <fristname>Juri></firstname>
//</object>

//JSON
// names have to be in quotes (they can be in object literals)
// JSON is a subset of js object literals
// JSON has stricter rules than object literal notation
//{
//    "firstname": 'Juri',
//    "isAProgrammer": true
//}

// Turn object literal into JSON
var myJSON = JSON.stringify(objectLiteral)
console.log('This is a JSON object:');
console.log(myJSON);

// Turn JSON into object literal
var myObjectLiteral = JSON.parse(myJSON);
console.log('Back to js object literal:');
console.log(myObjectLiteral);