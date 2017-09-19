// Default Values

// Using OR (||) operator
function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}

greet('Juri');
greet();

// Using ES6 default values
function hello(name = 'John') {
    console.log('Hello ' + name);
}

hello('Juri');
hello();