//Reverse a string without using built-in methods (split, reverse, join).


const prompt=require("prompt-sync")();
let str= prompt("Please enter a word  ");
let y=str.length-1;
let newArray='';
for(let i=y;i>=0;i--){
newArray+=str[i];
}
console.log(newArray);


//...............BY USING FUNCTIONS........................................
// function reverseStringWithoutBuiltIns(str) {
//   let reversedStr = ""; // Initialize an empty string to store the reversed result
//   console.log(str.length);
  
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i]; // Append each character from the original string in reverse order
//   }
//   return reversedStr; // Return the newly constructed reversed string
// }


// const originalString = "SHILPA KOORAYIL";
// const reversed = reverseStringWithoutBuiltIns(originalString);
// console.log(reversed); // Output: olleh
// //...................................................
 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// let originalString = "hello";
// let reversedString = reverseString(originalString);
// console.log(reversedString); // Output: olleh
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>