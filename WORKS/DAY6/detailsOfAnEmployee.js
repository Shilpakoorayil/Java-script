// HOME:
// Lets creat a function
// FIRST NAME
// LAST NAME
// title : rest parameter
// log : first name, last name
// console.log(`name:{$first name} {$last name}`)
// console.log(title.join(','))
// tile.join
//..............................................................................
// Function to display an employee's name and titles
function displayEmployeeTitles(firstName, lastName, ...titles) {
  // Combine the first name and last name
  const fullName = `${firstName} ${lastName}`;

  // Log the full name
  console.log(`Employee Name: ${fullName}`);

  

  // Check if any titles were provided
  if (titles.length > 0) {
    // Join the titles from the rest parameter array into a single string
    const titleString = titles.join(', ');
    console.log(`Titles: ${titleString}`);
  } else {
    console.log('No titles specified.');
  }
}
  console.log("..................................");

// Example 1: Calling the function with multiple titles
displayEmployeeTitles("Shilpa", "Koorayil", "CEO", "Co-Founder", "Strategist");
// Output:
// Employee Name: Shilpa Koorayil
// Titles: CEO, Co-Founder, Strategist
  console.log("..................................");
// Example 2: Calling the function with only one title
displayEmployeeTitles("Niketh", "Ashith", "Team Lead");
// Output:
// Employee Name: Niketh Ashith
// Titles: Team Lead
  console.log("....................................");
// Example 3: Calling the function without any titles
displayEmployeeTitles("Jony", "Jacob");
// Output:
// Employee Name: Jony Jacob
// No titles specified.
  console.log("....................................");
