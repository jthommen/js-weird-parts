// Object.create & Pure Prototypal Inheritance

// Polyfill for Object.create
// Code that gets run if js engine lacks object.create functionality
if(!Object.create) { // checks if Object.create exists via unary operator
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter. ');
        }
        // Creates empty function
        function F() {}
        F.prototype = o; // Sets prototype to object passed in: Overwrittes prototype
        return new F(); // Returns new empty constructor function
    };
}

var person = {
    firstname: 'default',
    lastname: 'default',
    greet: function() {
        return 'Hi ' + this.firstname; 
    }
}

// Pure Prototypal Inheritance
// Creates empty object with person object as prototype
var john = Object.create(person);
john.firstname = 'John';
console.log(john.greet());
