// Execution Stack

function b() {
}

function a(){
    b();
}

a();

// Every time a function is called, a new execution context is created
// new execution context is put on the execution stack
// new execution context has it's own space for variable and functions
// new execution context has it's own create & execute phase
// when there isn't another execution content to be added to the stack,
// the execution stack is executed top down
// once top execution is finished executing it's popped of the stack
// in the end the global execution context is run