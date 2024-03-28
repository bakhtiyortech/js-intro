// Temperature Converter
//Declare a variable fahrenheit and assign it a value representing a temperature in Fahrenheit. 
//Convert this temperature to Celsius and assign the result to a variable celsius. The formula for conversion is C = (F - 32) * (5/9). 
//Log the Celsius temperature to the console.

//Repeat the process in reverse. Assign a Celsius temperature to celsius, convert it to Fahrenheit, and log the result. 
//The formula for this conversion is F = C * (9/5) + 32.

var fahrenheitTemp = 85;
var celsiusTemp = (fahrenheitTemp - 32) * (5/9);
console.log("Celsius temperature:", celsiusTemp);


celsiusTemp = 25;
fahrenheitTemp = celsiusTemp * (9/5) + 32;
console.log("Fahrenheit temperature:", fahrenheitTemp);