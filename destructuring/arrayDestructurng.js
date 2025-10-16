//   BY USING ARRAY
const numbers =[10,20,30,40];


//basic destructuring

const [a,b] =numbers;
console.log(a);
console.log(b);


//Skipping values 
const [, , c] =numbers;
console.log(c);

//using rest operators

const[x,y, ...rest ]=numbers;
console.log("x is :",x);
console.log("rest is : ", rest);
//........................................................
//output

// 20
// 30
// x is : 10
// y is : 20
// rest is :  [ 30, 40 ]

//..............................
// const[x,y, ...rest ]=numbers;
// console.log("x is :",x);
// console.log("y is :",y);
// console.log("rest is : ", rest);


 



