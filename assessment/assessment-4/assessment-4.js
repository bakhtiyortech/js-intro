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
var evenNumber = randomNumber % 2 === 1;
console.log(evenNumber);

/* ----- challenge-3 ----- */

var numerator = Math.floor((Math.random() * -102) - 1);
var denominator = Math.floor(Math.random() * 4) + 5;
var divideNumbers = numerator / denominator;
console.log(divideNumbers);
var roundResult = Math.round(divideNumbers);
console.log(roundResult);