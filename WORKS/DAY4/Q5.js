// Q5:if...else Statement - Find the largest of two numbers
//...........................................................


const prompt= require("prompt-sync")();
let numberOne = prompt("Please enter First number  : ");
let numberTwo = prompt("Please enter Second number  : ");

let result = (numberOne > numberTwo) ?  numberOne +"  is greater than  " +numberTwo: numberTwo + " is greater than   " + numberOne;
console.log(result);

