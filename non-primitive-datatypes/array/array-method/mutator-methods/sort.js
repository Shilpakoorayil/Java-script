//.........................SORT.............................


let nums=[10,1,21,2];
nums.sort();
console.log(nums);

//numeric sort : ascending order
const number1=[4,5,10,3,1];
number1.sort((a,b)=> a-b);
console.log(number1);

//numeric sort : decending order
const number2=[4,5,10,3,1];
number2.sort((a,b)=> b-a);
console.log(number2); 

//default starting sort (ascending)
let fruits =["apple","banana","orange","grape"];
fruits.sort();
console.log(fruits);

//descending order for string

let fruitDescending =["apple","banana","orange","grape"];
fruitDescending.sort((a,b)=>b.localeCompare(a));
console.log(fruitDescending);


