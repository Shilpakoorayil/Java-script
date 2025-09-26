let n = 5;
for (let i = 1; i <= n; i++) {
    let str = " * ";
    console.log(str.repeat(i));
}


let m = 5;
for (let j = 1; j <= m; j++) {
       let strm = "* ";
    let spacem  = '  ';
    console.log(spacem.repeat((m-j))+strm.repeat(j));
}
