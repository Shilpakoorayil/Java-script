// let a=3;
// let b=2;

// [a,b]=[b,a]

// console.log("a->",a);
// console.log("b->",b);

//...............................................................
//by using prompt



const prompt=require("prompt-sync")();
let a= prompt("Please enter the a value");
let b= prompt("Please enter the b value");
[a,b]=[b,a]
console.log("a->",a);
console.log("b->",b);
