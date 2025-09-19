
//Addition case reduce-right
const sum=[1,2,3,4].reduceRight((acc,num) => acc +num,0);
console.log(sum);


//Negative numbers
const sum1=[-1,-2,-3,-4].reduceRight((acc,num) => acc -num);
console.log(sum1);