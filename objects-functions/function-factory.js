// Function Factory

// Using function closure to pass the language parameter --> Factory function
function makeGreeting(language) {

    return function(firstname, lastname){

        if (language ===  'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
    
        if (language ===  'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }

    }
}

// Generating custom functions with default parameters
var greetEnglish = makeGreeting('en'); // Returns a function where language is set to en: if( 'en' === 'en' ){}: Closure!
var greetSpanish = makeGreeting('es'); // Returns a function where language is set to en: if( 'es' === 'es' ){}: Closure!

greetEnglish('Juri', 'Thommen'); 
greetSpanish('Juri', 'Thommen');