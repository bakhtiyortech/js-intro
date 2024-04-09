// Challenge-3
// Extract and Capitalize Initials from a Full Name
// Create a variable fullName that holds a first name and a last name (two words only), for example, "John Doe". 
//Create a new variable called initial that is assigned the initials of the fullName, making sure the initials are uppercase.
// If fullName is "John Doe", then initial should be "JD".

var fullName = "John Doe";
var firstNameInial = fullName[0];
var spaceIdx = fullName.indexOf(" ");
var lastNameInitial = fullName[spaceIdx + 1];
var initial = firstNameInial + lastNameInitial;
console.log(initial);
