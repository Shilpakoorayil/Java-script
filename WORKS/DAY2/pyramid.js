let rows = 5; // height of the triangle

for (let i = 1; i <= rows; i++) {
  let str = "  ";

  // print spaces for alignment
  for (let j = 1; j <= rows - i; j++) {
    str += "";
  }

  // print stars
  for (let k = 1; k <= i; k++) {
    str += "*";
  }

  console.log(str);
}