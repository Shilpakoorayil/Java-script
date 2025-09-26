//This is ou Call Back Functions
function greetUser(name){
    console.log(`HELLO, ${name}!`);
    

}
//this function takes another function(callback) as an argument
function  greetUserInput(callback){
    const name ="ShilpaKoorayil"; 
    callback(name);
}
greetUserInput(greetUser);