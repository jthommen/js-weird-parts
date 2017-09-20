// Setting Prototypes

// Function constructors automaticall set the prototype
function Person(firstname, lastname){
    console.log('Started invoking function');
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log(this);
    console.log('Finished invoking function');
}

// This prototype gets used when new object is created by function
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// The new keyword sets the prototype of the empty object to the prototype of the function that then gets called
var John = new Person('John', 'Snow');
var Jane = new Person('Jane', 'Doe');

// The prototype property on a function is not the prototype of the function!
// It's the prototype used if the function is used to create objects

// Possible to add stuff to the prototype after the object creation
Person.prototype.getFormalFullName = function() {
    return this.firstname + ', ' + this.lastname;
}

console.log(John.getFormalFullName());

// Tipp: Add properties during function creation
// add methods to the prototype -> saving memory space

// Dangerous: If you use function without new keyword --> returnes undefined
// function constructors start with capital letter to always put the new keyword before