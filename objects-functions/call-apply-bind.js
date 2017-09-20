// call(), apply(), bind()

// Methods of a function that define, at the time the execution context is created,
// to what the 'this' keyword refers to

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var fullname = this.firstname + ' ' + this.lastname; // this refers to person object
        return fullname;

    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); // this refers to global object
    console.log('Arguments: ' + lang1 + ', ' +  lang2);
    console.log('-------');
}


// bind()
// Creates a copy of the original function and binds a new object to this
// using function as an object and calling a method of it --> bind this to person obj
var logPersonName = logName.bind(person);

logPersonName('HTML', 'CSS');

// alternative
var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); // this refers to global object
    console.log('Arguments: ' + lang1 + ', ' +  lang2);
    console.log('-------');

}.bind(person);

logName();


// call()
// Calls function but allows to specify the this variable
// Does not create a copy but calls the function
var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); // this refers to global object
    console.log('Arguments: ' + lang1 + ', ' +  lang2);
    console.log('-------');
}

logName.call(person, 'en', 'es');


// apply()
// works like call, except only accepts an array of parameters
// array can be more useful under mathematical circumstances
logName.apply(person, ['JS', 'Python']);


// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

// this keyword points to new object but accesses function of person
// works when other object has similar property names
console.log(person.getFullName.apply(person2));


// function currying
function multiply(a, b){
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2); // creates a copy of multiply but setting a = 2;

console.log(multipleByTwo(4));
