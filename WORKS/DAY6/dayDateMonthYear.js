
//..........................................
const today = new Date();
console.log(today);

// Get the day of the week (0 for Sunday, 6 for Saturday)
const dayOfWeek = today.getDay(); 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[dayOfWeek];

// Get the date (day of the month)
const date = today.getDate(); 

// Get the month (0 for January, 11 for December)
const month = today.getMonth(); 
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[month];

// Get the full year
const year = today.getFullYear();

console.log(`Today is ${dayName}, ${monthName} ${date}, ${year}`); 