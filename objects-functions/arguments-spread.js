// 'arguments' & spread

// 'arguments'
function greet(firstname, lastname, language) {

    if (arguments.length === 0) { // Check for existence of arguments
        console.log('Missing parameters!');
        console.log('------');
        return
    }

    console.log('Firstname: ' + firstname);
    console.log('Lastname: ' + lastname);
    console.log('Language: ' + language);
    console.log(arguments); // special js keyword holds array like object with param values
    console.log('arg 0: ' + arguments[0]);
    console.log('------');
}

// Valid call in JS
greet(); // 3x undefined, memory space is set up

greet('Juri'); // Arguments gets passed left to right
greet('Juri', 'Thommen');
greet('Juri', 'Thommen', 'Swiss German');


// Spread
// arguments will be depreceated for the spread operator
function greet2(firstname, lastname, language, ...other) { // takes all non-listed params and wraps it into array with given name
    
        console.log('Firstname: ' + firstname);
        console.log('Lastname: ' + lastname);
        console.log('Language: ' + language);
        console.log('------');

        if(other) { // Deals with non-listed arguments/params
            console.log(other);
        }
}

greet2('Juri', 'Thommen', 'en', 'Ireland', 'Spencer Dock');