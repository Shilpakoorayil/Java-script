//Write a function that returns the longest word in a sentence.


function findLongestWordWithLoop(sentence) {
  const words = sentence.match(/[a-zA-Z0-9]+/g);
  let longestWord = '';

  if (!words || words.length === 0) {
    return '';
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// Example usage:
const text2 = "This is an easy-to-understand example.";
console.log(findLongestWordWithLoop(text2)); // Outputs: "understand"
