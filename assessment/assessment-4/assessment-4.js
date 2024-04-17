/* ----- challenge-1 ----- */

var singleWord = "uzbekistan";
var randomSingleWordIdx1 = Math.floor(Math.random() * singleWord.length);
var randomSingleWordIdx2 = Math.floor(Math.random() * singleWord.length);
if (randomSingleWordIdx1 === randomSingleWordIdx2){
    console.log("The characters are the same.");
} else {
    console.log("The characters are diffrent.");
} 

var convertToUpperCase = singleWord[randomSingleWordIdx1].concat(singleWord[randomSingleWordIdx2]).toUpperCase();
console.log(convertToUpperCase);

/* ----- challenge-2 ----- */

var randomNumber = Math.floor((Math.random() * 1000) + 1);
var oddNumber = randomNumber % 2 === 0;
console.log(oddNumber);
var evenNumber = randomNumber % 2 !== 0;
console.log(evenNumber);

/* ----- challenge-3 ----- */

var numerator = Math.floor((Math.random() * -102) - 1);
var denominator = Math.floor(Math.random() * 4) + 5;
var divideNumbers = numerator / denominator;
console.log(divideNumbers);
var roundResult = Math.round(divideNumbers);
console.log(roundResult);

/* ----- challenge-4 ----- */

var testNumber = Math.floor(Math.random() * 2476) + 25;
var testNumberDivisible3Not5 = testNumber % 3 === 0 && testNumber % 5 !== 0;
console.log(testNumberDivisible3Not5);

/* ----- challenge-5 ----- */

var divTest = Math.floor(Math.random() * 101) + 100;
var divTestDivisible5Not3 = testNumber % 3 === 0 && testNumber % 5 !== 0;
console.log(testNumberDivisible3Not5);

/* ----- challenge-6 ----- */

var creativeString = "Exploring the vast universe of code can lead to unexpected discoveries."
var creativeStringRandomIdx = Math.floor(Math.random() * creativeString.length);
var textAfterRandom = creativeString.slice(creativeStringRandomIdx);
console.log(textAfterRandom);