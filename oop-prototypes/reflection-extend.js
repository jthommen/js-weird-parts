// Reflection

var person = {
    firstname: 'default',
    lastname: 'default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// Never do this (can slow down performance dramatically)
john.__proto__ = person;

// loop over every member in the object/collection
// for in grabs every property on object and objects prototype
for (var prop in john) {
    console.log(prop + ': ' + john[prop]);
}

// Only log properties that belong directly to object: Reflect!
// Reflection: Looking at an objects metadata
for (var prop in john) {
    if (john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

// Extend functionality of frameworks (e.g. underscore js)
var jane = {
    address: '111 main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(john, jane, jim); // combines first object with other objects
console.log(john);
// Extend pattern as alternative to the prototype pattern
