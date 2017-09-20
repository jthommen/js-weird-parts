// Arrays

// Long
var arr = new Array();

// Short (literal form)
var arr = [
    1,
    false,
    {
        name: 'Juri',
        country: 'Ireland'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    'hello'
];

console.log(arr);

// JS arrays can hold collections of anything

// Accessing array elements
arr[3](arr[2].name);