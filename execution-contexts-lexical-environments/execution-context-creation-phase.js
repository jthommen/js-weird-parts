// Global Environment & Execution Context
b();
console.log(a);

// Gets attached to the global object
// in the browser this is the window
var a  = 'Hello Juri';

function b() {
    console.log('Called b!');
}

// this also refers to the global object
// the window in case of a browser running js