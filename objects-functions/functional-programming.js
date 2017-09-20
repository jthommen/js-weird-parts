// Functional Programming

// Needs first-class functions

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = [];
for(var i = 0; i < arr1.length; i++){

    arr2.push(arr1[i] * 2 );

}

console.log(arr2);

// Putting work into functions reduces repetition
// Creating a mapping helper function
// Abstracted operation on array item
function mapForEach(arr, fn){

    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(
            fn(arr[i])
        );
    }
    return newArr;
}

// Able to specify different operations on the array items

// Triple
var arr3 = mapForEach(arr1, function(item){
    return item * 3;
});
console.log(arr3);

// Divide by 2
var arr4 = mapForEach(arr1, function(item){
    return item / 2;
});
console.log(arr4);

// Evaluate smaller 2
var arr5 = mapForEach(arr1, function(item){
    return item < 2;
});
console.log(arr5);


// Another param is possible too
var checkPastLimit = function(limiter, item){
    return item > limiter;
}

// creating copy of the function  with 1 as the limiter
var arr6 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr6)

// Even simpler
var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
}

// creating another array from arr1 with a simple limiter set function 
var arr7 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr7);

// Tip: Don't mutate data in the small helper functions
// Easier to do it in one 'top function' (example the mapForEach)
// Even better to create copies of data instead of mutating it