

// let a=4;
// let areaOfSquare = a*a;
// console.log("Area of a square is ",areaOfSquare);



//...........................................................................
//by using prompt

const prompt=require("prompt-sync")();
let value= prompt("Please enter the measurements of one side of a square");
let result = value * value;
console.log("Area of a square is ",result);
