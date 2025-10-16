// Q8: Ternary Operator - Find the minimum of two numbers
//.......................................................


const prompt=require("prompt-sync")();
let numberOne= prompt("Please enter first number  :  ");
let numberTwo= prompt("Please enter second number  :  ");


const result = (numberOne > numberTwo)? numberTwo +"  is minimum": numberOne + "   is minimum";
console.log(result);
