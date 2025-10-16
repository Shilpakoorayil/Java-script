const originalArray = [1, 2, 3, 2, 4, 5, 1, 6];

// Using Set to remove duplicates
const uniqueArray = [...new Set(originalArray)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]