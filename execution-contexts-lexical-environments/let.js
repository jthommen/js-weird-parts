// let
// can be used instead of var (different way of scoping a variable)
// uses js 'block scoping' {only available inside block}

if (a > b) {
    let c = true;
}

// Difference: Not allowed to run/use variable 
// until it's assigned in execution phase of execution environment

// Application: for loop: Let creates new variable every time code is running