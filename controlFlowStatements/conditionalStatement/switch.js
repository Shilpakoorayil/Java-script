//....................................................................................
const prompt = require("prompt-sync")();
console.log("................................");
let day = prompt("Please enter your  day : ");




switch (day) {
    case "Monday":
        console.log("Start Of Work week");
        break;

    case "Sunday":
        console.log("Weekend");
        break;

         case "Tuesday":
        console.log("Today is tuesday");
        break;
         case "Wednesday":
        console.log("Today is Wednesday");
        break;

    default:
        console.log("Regular day");
        break;



}