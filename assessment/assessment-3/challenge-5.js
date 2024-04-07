// Challenge-5

// Remove the First Occurrence of a Selected Character from a Sentence

// Declare a variable named completeSentence and assign it the sentence: "The quick brown fox jumps over the lazy dog." 
//This classic sentence contains every letter of the alphabet, providing a full set to work with.
// Define a variable randomChar and assign it a character from your completeSentence. For example, let's choose "o"
// Without using the replace method, declare a new variable missingRandomCharString. 
//This variable will hold the completeSentence minus the first occurrence of randomChar. 
//To accomplish this, you may need to split the sentence into parts or use a combination of substring operations, 
//ensuring you only remove the first instance of randomChar.
// The aim is to extract and exclude the initial appearance of randomChar from completeSentence, 
//forming a new string that lacks this specific character, and then assign this new string to missingRandomCharString.

var completeSentence = "The quick brown fox jumps over the lazy dog.";
var randomChar = "o"; 
randomChar = completeSentence.indexOf(randomChar);
// console.log(randomChar);
var missingRandomCharString = completeSentence.slice(0, randomChar).concat(completeSentence.slice(13));
console.log(missingRandomCharString);
