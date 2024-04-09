// Challege

// Correct javascript
// Given a variable named javascript that holds the string "javascript", transform this string into "JavaScript" using string methods. 
// Then, reassign the transformed string to the same variable and print the new value.

var javascript = "javascript";
// "j".toUpperCase() + "ava" + "s".toUpperCase() + "cript" => "JavaScript"

var firstSIdx = javascript.indexOf("s");
var part1 = javascript[0].toUpperCase();
var part2 = javascript.slice(1, firstSIdx);
var part3 = javascript[firstSIdx].toUpperCase();
var part4 = javascript.slice(firstSIdx + 1);

javascript = part1 + part2 + part3 + part4;
console.log(javascript);