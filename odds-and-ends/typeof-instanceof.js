// typeof, instanceof

// typeof is function that takes a param and returns a string
// instanceof is function that takes a param and tells what is in the prototype chain

var a = 3;
console.log('a is: ' + typeof a);

var b ='Hello';
console.log('b is: ' + typeof b);

var c = {};
console.log('c is: ' + typeof c);

var d = [];
console.log('d is: ' + typeof d); // weird
console.log(Object.prototype.toString.call(d)); // better

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');

console.log('e is: ' + typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); 
console.log(typeof null); // bug

var z = function(){};
console.log(typeof z);
