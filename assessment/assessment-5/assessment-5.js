/* ----- Challenge-1 ----- */

var randomNumber1 = Math.floor((Math.random() * (15 + 1)) + 15);
var randomNumber2 = Math.floor((Math.random() * (15 + 1)) + 15);
if (randomNumber1 === randomNumber2){
    console.log("The numbers are equal.");
} else if (randomNumber1 > randomNumber2){
    console.log("The first number is greater.");
} else {
    console.log("The second number is greater than the first one.")
}

/* ----- Challenge-2 ----- */

var string1 = "examplestringonegenerated";
var string2 = "secondexamplestringgenerated";
var englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
var randomEnglishAlphabetIdx = Math.floor(Math.random() * englishAlphabet.length);
var targetCharacter = englishAlphabet[randomEnglishAlphabetIdx];
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

var randomNumber = Math.floor((Math.random() * 1000) + 1);
if (randomNumber % 3 === 0 && randomNumber % 5 !== 0){
    console.log("Fizz");
} else if (randomNumber % 5 === 0 && randomNumber % 3 !== 0){
    console.log("Buzz");
} else if (randomNumber % 3 === 0 && randomNumber % 5 === 0){
    console.log("FizzBuzz");
} else {
    console.log("JizzBizz");
}

/* ----- Challenge-4 ----- */

var textString = "I find myself reflecting on past adventures, realizing that my greatest discoveries were often right at home, hidden in plain sight, waiting to be appreciated, and truly making them mine.";
var textStringReplaceWords = textString.replaceAll("I", "We").replaceAll("my", "our").replaceAll("myself", "ourselves").replaceAll("mine", "ours");
console.log(textStringReplaceWords);

/* ----- Challenge-5 ----- */

var mainString = "Exploring the vast universe of code can lead to unexpected discoveries.";
var targetString = "universe";

if (mainString.indexOf(targetString)){
    console.log(`${targetString} string is in ${mainString}`);
} else {
    console.log(`${targetString} is not in ${mainString}`);
}

// --- Challenge 6 --- \\
// -- .trim() - Removes spaces from both front and end of a string and returns string without spaces.
// -- .trimEnd() - Removes spaces from at the end of a string and returns string without end space.
// -- .trimStart() - Removes spaces from at the start of a string and returns string without start space.
