// Remove spaces

// Create a variable that contains the sentence "I Love JavaScript" with each word starting with an uppercase letter and no punctuation. 
// Remove the spaces between the words, reassign this new string to the same variable, and print the new value.

var str = "I Love JavaScript";
var removeSpace = str.replaceAll(" ", "");
console.log(removeSpace);
