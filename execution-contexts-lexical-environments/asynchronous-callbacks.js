// Asynchronous Callbacks

// JS looks at the Event Queue when the execution stack is empty
// then checks if something should happen when the event is in the queue
// action to an event usually is a function that creates a new execution context
// on the execution stack
// 'event loop' = js checking the event queue periodically for new events to act upon

// js is synchronously
// browser puts events asynchronously on the js event queue


// Long running function 
// to simulate high execution stack before events come in
function waitThreeSeconds() {

    // Synchronous (blocking)
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finished function');

    // Asynchronous (non-blocking)
    // setTimeout(function() {
    //     console.log('finished function');
    // }, 3000);
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');