//The .at() method provides a way to access elements by index, 
// similar to bracket notation ([]), 
// but with the added benefit of handling negative indices.

// For Arrays
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits.at(0));   // Output: 'apple' (first element)
console.log(fruits.at(2));   // Output: 'orange' (third element)
console.log(fruits.at(-1));  // Output: 'orange' (last element)
console.log(fruits.at(-2));  // Output: 'banana' (second to last element)

// For Strings
const greeting = "Hello World";

console.log(greeting.at(0));   // Output : 'H',
console.log(greeting.at(-6));  // Output : space ,
console.log(greeting.at(-11));//  Output : H .