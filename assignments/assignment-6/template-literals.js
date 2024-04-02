// Objective
// Your task is to create variables and template literals to form a paragraph with those variables.

// Instructions
// Declare at least ten different variables. These variables can represent attributes such as:

// Name

// Age

// City of residence

// Profession

// Hobby

// Favorite food

// Favorite color

// Favorite movie or book

// Favorite song

// Favorite sport or team

// Dream travel destination

// Favorite animal

// Favorite season

// Assign appropriate values to each variable. Use template literals to assemble your variables into a paragraph. Your goal is to form the following paragraph:

// "Hello, my name is John and I am 30 years old. I live in New York, where I work as a software engineer. In my free time, I enjoy reading books and playing the guitar. My favorite food is pizza and my favorite color is blue. My dream is to one day visit Tokyo. My favorite season of the year is autumn because of the beautiful changing colors of the leaves."

// Remember to replace each detail (like "John", "30", "New York", etc.) in the paragraph with your own variables.

// Print your final paragraph using console.log().


var firstName = "John";
var age = 30;
var cityOfResidence = "New York";
var profession = "software engineer";
var hobby1 = "reading books";
var hobby2 = "playing the guitar";
var favoriteFood = "pizza";
var favoriteColor = "blue";
var dreamTravelDestination = "Tokyo";
var favoriteSeason = "autumn";

// console.log(`Hello, my name is ${firstName} and I am ${age} years old. I live in ${cityOfResidence}, where I work as a ${profession}. In my free time, I enjoy ${hobby1} and ${hobby2}. My favorite food is ${favoriteFood} and my favorite color is ${favoriteColor}. My dream is to one day visit ${dreamTravelDestination}. My favorite season of the year is ${favoriteSeason} because of the beautiful changing colors of the leaves.`);

var result = `Hello, my name is ${firstName} and I am ${age} years old. I live in ${cityOfResidence}, where I work as a ${profession}. In my free time, I enjoy ${hobby1} and ${hobby2}. My favorite food is ${favoriteFood} and my favorite color is ${favoriteColor}. My dream is to one day visit ${dreamTravelDestination}. My favorite season of the year is ${favoriteSeason} because of the beautiful changing colors of the leaves.`;
console.log(result);