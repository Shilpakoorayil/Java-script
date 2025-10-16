//...........................FLAT MAP METHOD ...............................




const sentences = ["hello Shilpa", "how are you"];

const words = sentences.flatMap(sentence => sentence.split(" "));

console.log(words); // Output: ["hello", "shilpa", "how", "are", "you"]