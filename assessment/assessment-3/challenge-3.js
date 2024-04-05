// Challenge-3
// Extract and Capitalize Initials from a Full Name
// Create a variable fullName that holds a first name and a last name (two words only), for example, "John Doe". 
//Create a new variable called initial that is assigned the initials of the fullName, making sure the initials are uppercase.
// If fullName is "John Doe", then initial should be "JD".

var fullName = "John Doe";
var initial = fullName[0].concat(fullName[5]);
console.log(initial);