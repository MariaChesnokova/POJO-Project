/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Initialize an empty object to store the counts.
  const counts = {};

  // Loop through the array and count the occurrences of each value.
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    // Check if the item is already in the counts object.
    if (counts[item] === undefined) {
      // If not, initialize the count to 1.
      counts[item] = 1;
    } else {
      // If it's already in the counts object, increment the count.
      counts[item]++;
    }
  }

  return counts;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
