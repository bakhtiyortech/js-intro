/* ----- Challenge-1 ----- */

// var randomNumber1 = (Math.random() * (15 + 1) + 15);
// var randomNumber2 = (Math.random() * (15 + 1) + 15);
// if (randomNumber1 === randomNumber2){
//     console.log("The numbers are equal.");
// } else if (randomNumber1 > randomNumber2){
//     console.log("The first number is greater.");
// } else {
//     console.log("The second number is greater than the first one.")
// }

/* ----- Challenge-2 ----- */

var string1 = "examplestringonegenerated";
var string2 = "secondexamplestringgenerated";
var englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
var randomEnglishAlphabet = Math.random() * englishAlphabet.length;
var targetCharacter = alphabet[randomEnglishAlphabet];
var count1 = string1.replace(targetCharacter, "").length;
var count2 = string2.replace(targetCharacter, "").length;

if (count1 === count2){
    console.log(`Number of ${targetCharacter} is the same in both strings.`);
} else if (count1 > count2){
    console.log("The second one is greater.");
}else {
    console.log("Character does not exist in each string.");
}

/* ----- Challenge-3 ----- */

var randomNumber = (Math.random() * 1000) + 1;
if (randomNumber === 3 && randomNumber % 3 === 0){
    console.log("Fizz");
} else if (randomNumber === 5 && randomNumber % 5 === 0){
    console.log("Buzz");
} else if (randomNumber === 3 && randomNumber % 3 === 0 && randomNumber % 5 === 0 && randomNumber === 5 ){
    console.log("FizzBuzz");
}