//Q4:if Statement - Check if a person is an adult
//..............................................


const prompt=require("prompt-sync")();
let age = prompt("Please enter your age  : ");
let result =(age >= 18)?"You are eligible for voting":"Sorry ! You are not eligible for voting";
console.log(result);