//   BY USING OBJECT ...........................


const person = {name :"Shilpa", age :9, country :"India"}

//basic
const {name,age} =person;
console.log(name);
console.log(age);


//rename variable
const {country :nation }= person;
console.log(nation);//changed the key


//default values
const{gender = "female"} =person;
console.log(gender);


