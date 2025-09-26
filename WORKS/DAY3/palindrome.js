

const prompt = require("prompt-sync")();
let strin = prompt("Please enter a word   : ");
const str = strin.toLowerCase().replace(/[^a-z0-9]/g, '');
let j = str.length - 1;
console.log(str.length);


for (let i = 0; i < str.length / 2; i++ ) {
     console.log(str[i] , str[j])
    if (str[i] != str[j]) {

     
        console.log("Not a palindrome");

        return ;
    }
    j--;
   
   
}
 console.log("Palindrome");
    return ;