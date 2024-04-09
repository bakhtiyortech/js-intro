// Challenge-6

// Write a program to calculate the number of times a specific character appears in a given string.

// Declare a variable, randomString, assigning it a string value of your choice.
// Define a variable, randomChar, setting it to a character you wish to count within randomString.
// Calculate the number of times randomChar appears in randomString. 
// Use the string length property, the replace method, 
// or any other string methods you find appropriate to assist in your calculation.
// Output the count of randomChar within randomString using console.log.

var randomString = "Hi, my name is John. I am 30 years old. I am from England.";
var randomChar = "m";
var randomStringLength = randomString.length;
var randomStringWithoutRandomChar = randomString.replaceAll(randomChar, "");

var randomCharCount = randomStringLength - randomStringWithoutRandomChar.length;
console.log(randomCharCount);