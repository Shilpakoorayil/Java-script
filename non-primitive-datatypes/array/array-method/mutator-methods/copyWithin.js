

//...........................copyWithin METHOD ...........................
//>syntax: array.copyWithin(target, start, end)

//  const arr = ["a", "b", "c", "d", "e"];
// arr.copyWithin(0, 0);
// console.log(arr); // "a", "b", "c", "d", "e"];


// arr.copyWithin(0, 1);
// console.log(arr);//["b","c","d","e","e"]


// arr.copyWithin(0, 2);
// console.log(arr);//["c","d","e","d","e"]

// arr.copyWithin(0, 3);
// console.log(arr);//["d","e","c","d"."e"]

// arr.copyWithin(0, 1,1);
// console.log(arr);
//..................................................................
const arr = [1, 2, 3, 4, 5];
// arr.copyWithin(1, 0, 2);
// console.log(arr); // [1, 1, 2, 4, 5]

// arr.copyWithin(2, 3);
// console.log(arr); // [1, 2,4,5,5]

// arr.copyWithin(1, 0, 3);
// console.log(arr); // [1, 1, 2, 3, 5]

 arr.copyWithin(1, 0, 4);
console.log(arr); // [1, 1, 2, 3, 4]
