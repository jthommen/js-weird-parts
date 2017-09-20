// Function Overloading
// Doesn't exist in js
// not necessary, alternative pattern exist due to first-class functions

function greet(firstname, lastname, language) {
    language = language || 'en';

    if (language ===  'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language ===  'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}
greet('Juri', 'Thommen');
greet('Juri', 'Thommen', 'es');
greet('Juri', 'Thommen', 'en');


// Overloading not necessary
function greetEnglish(firstname, lastname){
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname){
    greet(firstname, lastname, 'es');
}

greetEnglish('Juri', 'Thommen');
greetSpanish('Juri', 'Thommen');
