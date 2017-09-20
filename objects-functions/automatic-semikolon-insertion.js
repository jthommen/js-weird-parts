// Automatic semikolon insertion

// Semikolon in core js are optional
// Syntax parser inject ; if they see a carriage return after a keyword

// Put your own semikolons! So the js parser doesn't have to guess

function getPerson() {
    return // Automatic semikolon inserted here ; Object literal is ignored
    {
        firstname: 'Juri'
    }
}

console.log(getPerson());


// Fix it!
function getPerson2() {
    return { // Put curly braces on same line
    
        firstname: 'Juri'
    }
}

console.log(getPerson2());

// Tip: Good practice to put curly braces always on the same line to avoid errors
// due to automatic semikolon insertion