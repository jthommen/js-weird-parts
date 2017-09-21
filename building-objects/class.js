// Classes in ES6

// JS classes define objects
// class is an object to create other objects
class Person {
    // Used to preset values
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + firstname;
    }
}

// extends sets the prototype of person
class InformalPerson extends Person {
    
    constructor(firstname, lastname){

        // super will call the constuctor of the prototype
        super(firstname, lastname);
    }

    // Overrides the prototype greet method
    greet(){
        return 'Yo ' + firstname;
    }
}

var john = new Person('John', 'Doe');

// Better than function constructors
// Tip: Embrace pure prototypal inheritance with object.create