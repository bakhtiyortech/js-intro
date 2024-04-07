// Challege

// Correct javascript
// Given a variable named javascript that holds the string "javascript", transform this string into "JavaScript" using string methods. 
// Then, reassign the transformed string to the same variable and print the new value.

var javascript = "javascript";
javascript = javascript.slice(10).concat("J", javascript.slice(1, 4)).concat("S",javascript.slice(5));
console.log(javascript);