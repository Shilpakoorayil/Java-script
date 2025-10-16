// Q6:switch Statement - Check month name from number
//...............................................
const prompt = require("prompt-sync")();
console.log("...............................................");

console.log("............ HELLO Sir/Madam ..................");
let day = prompt("Please enter a number between 1 and 12 : ");
console.log(day);

if (day <= 12) {
  switch (day) {

    case '1': console.log("Its January");
      break;
    case '2': console.log("Its February");
      break;
    case '3': console.log("Its March");
      break;

    case '4': console.log("Its April");
      break;
    case '5': console.log("Its May");
      break;
    case '6': console.log("Its June");
      break;


    case '7': console.log("Its July");
      break;
    case '8': console.log("Its August");
      break;

    case '9': console.log("Its September");
      break;
    case '10': console.log("Its October");
      break;
    case '11': console.log("Its November");
      break;
    case '12': console.log("Its November");
      break;




  }
} else {
  console.log("Sorry! Your input is wrong.");
  console.log("Please enter a number between 1 and 12.");
  console.log("Try Again ");
}
console.log("...............................................");

