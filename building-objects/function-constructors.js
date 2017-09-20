// Building Objects - Function Constructors

// Founder of JS: Brendan Eich
// Called it JS to attract Java developers

// Function constructors and keyword 'new'
// Object construction via a function -> Function constructor

function Johns() {
    console.log(this); // empty object
    this.firstname = 'John'; // property gets added
    this.lastname = 'Doe'; // property gets added
    console.log('This function is invoked!');
    // only works without return statement in the function
}

// Object named Person with special properties
// new is an operator: An empty object is created
// then calls the function, this points to the new empty object in memory
var John = new Johns(); 
console.log(John);

// Object cration with params
function Person(firstname, lastname){
    console.log('Started invoking function');
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('Finished invoking function');
}

var Jane = new Person('Jane', 'Doe');
console.log(Jane);

// Often values are passed into a function constructor