const prompt=require("prompt-sync")();
let n= prompt("Please enter a number");



    if(n==1){
         console.log("Not a Prime number");
        return false;
       
        
    }
    if(n===2 || n===3){
        console.log(" Prime number");
        return true;
    }
    if(n%2==0 || n%3 == 0){
         console.log("Not a Prime number");
        return false;
    }
    for(let i=5; i<=Math.sqrt(n); i=i+6){
        if(n%i == 0 || n%(i+2)==0){
             console.log("Not a Prime number");
            return false;
        }

    }
  
   console.log("Prime number");
    return true;


