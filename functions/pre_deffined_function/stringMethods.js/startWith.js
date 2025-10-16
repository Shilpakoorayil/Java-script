const greeting = "Hello, world!";

// Basic usage
console.log(greeting.startsWith("Hello")); // true
console.log(greeting.startsWith("Hi"));    // false
console.log(greeting.startsWith("hello")); // false (case-sensitive)



//........................................................................


// Using the optional 'position' argument
console.log(greeting.startsWith("world", 7)); // true (starts searching from index 7)
console.log(greeting.startsWith("world", 0)); // false (doesn't start with "world" at index 0)
console.log(greeting.startsWith("o", 4));    // true (the character 'o' is at index 4)
