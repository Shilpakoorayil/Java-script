function sum(...numbers){//act as rest parameter
return numbers.reduce((total,num)=> total +num,0);
}
console.log(sum(1,2));
console.log(sum(3,4,3,4,5,));
console.log(sum(10,20,30,40,50,60,70,80,90,100));

