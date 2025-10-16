//.................... FLAT METHOD .....................................

const nested = [1,[2,[3,[4]]]];//3 arrays

// const flat1 =  nested.flat();
// console.log(flat1);
//out [ 1, 2, [ 3 ] ]
//by default
//nested.flat(); nested.flat(1);//SAME


const flat1 =  nested.flat(2);
console.log(flat1);//[ 1, 2, 3, [ 4 ] ]