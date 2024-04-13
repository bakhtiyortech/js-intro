 /* ----- 1 ----- */

var userPassword = "boss12345";
var typedPassword = "boss 123";

if (userPassword === typedPassword){
    console.log("Access Granted.");
} else {
    console.log("Access Denied. Incorrect Password.");
}


 /* ----- 2 ----- */

 var userAge = 36;
 var requiredAge = 18;

 if (userAge >= requiredAge){
    console.log("You have access to the content.");
 } else {
    console.log("Access restricted. You must be 18 years or older.");
 }


  /* ----- 3 ----- */

  var userNameLength = 5;
  var userName = "boss";

  if (userName >=userNameLength){
    console.log("Username is valid.");
  } else {
    console.log("Username must be at least 5 characters long.");
  }


  /* ----- 4 ----- */

//  Question: Who was your best freind in the school?

var correctAnswer = "Habibulloh";
var userTypedAnswer = "Abbos";

if (correctAnswer === userTypedAnswer){
    console.log("Correct! You may proceed.");
} else {
    console.log("Incorrect answer. Please try again.");
}