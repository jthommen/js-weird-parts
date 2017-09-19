//Objects and the dot

var person = new Object();

// Computed member access operator (object bracket notation)
person['firstname'] = 'Juri';
person['lastname'] = 'Thommen';

var firstNameProperty = 'firstname';

console.log(person); // Object
console.log(person[firstNameProperty]); // Retrieved object property with member access operator


// Member access operator (object dot notation)
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = '12 Hill of Down House';
person.address.city = 'Dublin';
person.address.country = 'Ireland';

console.log(person['address']['street']);


// Tip: Use dot operator (member access operator) except a dynamic string accessor method is absolutely needed