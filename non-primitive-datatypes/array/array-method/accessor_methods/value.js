// ....................... Value Method ........................................

const nameAndAge ={
    'joe' :32,
    'sue': 32,
    'jil':89,
    'shil': 21,
    'ashi':39,
    'probhu': 40,
    'kiran': 56,
}

const name =Object.values(nameAndAge);
for(const value of name){
    console.log(value)

}
