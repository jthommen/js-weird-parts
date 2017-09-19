// Object Literals

// Long way
var person = new Object();
person.firstname = 'Juri';
person.lastname = 'Thommen';

// Object Literal (short hand)
var person = {};

// Literal with initial properties
var person = { 
    firstname: 'Juri', 
    lastname: 'Thommen',
    address: {
        street: '12 Hill of Down',
        city: 'Dublin',
        country: 'Ireland'
    }
 }; // Usse whitespace for better readibiliy

console.log(person);

// Object can be created on the fly, even inside function calls with object literals