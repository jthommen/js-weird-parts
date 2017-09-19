// Functions are Objects!!

// Functions are first class
// Functions can have different properties, primitives, objects, other functions
// Special properties of functions: Name (optional), custom Code (we write)
// The code we write inside the function body gets placed into a special property of the function object
// The code property of a function is 'invocable' ()

function greet() {
    console.log('Hi');
}

greet.language = 'english';
console.log(greet.language);
console.log(greet['language']);

console.log(greet);
greet();