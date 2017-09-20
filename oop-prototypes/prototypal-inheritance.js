// Inheritance (classical vs. prototypal)

// Classical
// - verbose (friend, protected, private, interface...)

// Prototypal
// -simple (flexible, extensible, easy to understand)
// All obj in JS have a proto property

// scope chain: Where we have access to a variable
// prototype chain: Where we have access to a property or method amongst a sequence of objects

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
console.log(john.getFullName()); // John Doe
console.log(john.firstname); // John

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = john;
console.log(jane.lastname); // Doe