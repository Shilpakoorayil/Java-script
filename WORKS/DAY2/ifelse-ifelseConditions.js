 //require means import
const prompt =require("prompt-sync")();
console.log("................................");

let score = prompt("Please enter your score");
 



 if (score > 90) {
    console.log("Grade: A");
    
 } else if(score >=80){
    console.log("Grade : B");
    
    
 }else if(score >= 70){
 console.log("Grade : C");
 }else{
    console.log("Grade : F");
    
 }

 