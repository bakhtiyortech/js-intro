// Challenge-4

// Remove the First Letter of Your Name from the Alphabet String

// Create a variable called alphabet and assign it the string containing all lowercase alphabet letters from "a" to "z".
// Create a variable named alphabetWithoutMyNameFirstCharacter. Assign to this variable the alphabet string with the first letter of your name removed, ensuring the operation is case-insensitive. 
// This means that whether your name starts with a lowercase or uppercase letter, it should still be removed from the alphabet string. Print the result. 

 var alphabet = "abcdefghijklmnopqrstuvwxyz";
 var nameFirstLetter = "b";
 var nameFirstLetterIdx = alphabet.indexOf(nameFirstLetter);

 var alphabetWithoutMyNameFirstCharacter = alphabet.slice(0, nameFirstLetterIdx) + alphabet.slice(nameFirstLetterIdx + 1);
 console.log(alphabetWithoutMyNameFirstCharacter);