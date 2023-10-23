/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

function getFullName(person) {
    // Check if both firstName and lastName properties exist in the person object
  if (person.firstName && person.lastName) {
    return person.firstName + ' ' + person.lastName;
  } else {
    // If either of the properties is missing, return an empty string
    return '';
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
