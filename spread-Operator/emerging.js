//Emerging 

const arr1  =      [2,4,6];
const arr2 =     [8,10];
const combine =  [...arr1,  ...arr2];
console.log(combine);


const obj1 ={
    apple : "red",
    pinapple : "yellow"

}
const obj2 ={
    taste : "Yummy",
}
const merged= {...obj1,...obj2};
console.log(merged );
