// Objective
// You've been tasked with composing a famous quote using separate parts of a sentence. Each part of the sentence will be stored in a different variable. You are to assemble these parts together to reveal the final quote.

// Instruction
// Here are the sentence parts:

// Variable part1: "The greatest glory in"

// Variable part2: "living lies not in"

// Variable part3: "never falling, but in"

// Variable part4: "rising every time"

// Variable part5: "we fall."

// Variable author: " - Nelson Mandela"

// The final quote should look like this: 

// "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"

// Your challenge is to create this quote four separate times. Each time, use a different string concatenation method:

// First, use the template literal method.

// Second, use the .concat() method.

// Third, use the + operator.

// Fourth, use the += operator.

// After you've completed all four methods, compare the results. Make sure each version of the quote matches the final quote exactly

var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = "- Nelson Mandela";

// First, use the template literal method.
// console.log(`${part1} ${part2} ${part3} ${part4} ${part5} ${author}`);
var result1 = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`;
console.log(result1);

// Second, use the .concat() method.
// console.log(part1.concat(" ",part2, " ",part3," ",part4," ",part5," ",author));
var result2 = part1.concat(" ",part2, " ",part3," ",part4," ",part5," ",author);
console.log(result2);

// Third, use the + operator.
// console.log(part1 + " " + part2 + " " + part3 + " " + part4 + " " + part5 + " " + author);
var result3 = part1 + " " + part2 + " " + part3 + " " + part4 + " " + part5 + " " + author;
console.log(result3);

// Fourth, use the += operator.
// console.log(part1 += "",part2 += "",part3 += "",part4 += "",part5 += "",author);
var result4 = part1;
result4 += " " + part2;
result4 += " " + part3;
result4 += " " + part4;
result4 += " " + part5;
result4 += " " + author;
console.log(result4);



