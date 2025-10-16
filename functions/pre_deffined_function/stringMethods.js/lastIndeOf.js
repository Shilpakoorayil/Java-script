const text = "hello world hello";

// Find the last occurrence of "hello"
const lastIndex1 = text.lastIndexOf("hello"); 
console.log(lastIndex1); // Output: 12

// Find the last occurrence of "o" starting the search from index 5
const lastIndex2 = text.lastIndexOf("o", 5); 
console.log(lastIndex2); // Output: 4

// Substring not found
const lastIndex3 = text.lastIndexOf("xyz"); 
console.log(lastIndex3); // Output: -1