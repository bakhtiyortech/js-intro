// Swapping Values
//Declare two variables, a and b, and assign them any two values of your choice. 
//Write code to swap the values of a and b without using a third variable, then log a and b to confirm that their values have been swapped
//Example:
//var a = 4 and var b = 5; After swapping, a should be equal to 5,and b should be equal to 4.

var a = 5;
var b = 4;
var c = a + b; 

a = c - a;
b = c - b;

console.log(a, b);

a -= 1;
console.log(a);

b += 1;
console.log(b);