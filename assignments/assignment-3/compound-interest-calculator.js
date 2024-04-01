// Compound Interest Calculator

// Declare variables principal, annualRate, and years, assigning them appropriate values for a compound interest calculation. 
// Compute the compound interest with the formula A = P(1 + r/n)^(nt), where:

// P is the principal amount.

// r is the annual interest rate (decimal).

// n is the number of times interest is compounded per year.

// t is the time the money is invested for in years. 
// Store the total amount after interest in a variable totalAmount and log it to the console. 
// Note: You can assume n to be a fixed value like 4.

var principal = 10000;
var annualRate = 0.07;
var years = 5;
var n = 4;
// var totalAmount = principal * (1 + annualRate/n)^(n * years);
var totalAmount = principal * (1 + annualRate/n) ** (n * years);
console.log(totalAmount);