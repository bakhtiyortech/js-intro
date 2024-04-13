/* ----- 1 ----- */

var randomNumber = Math.floor(Math.random() * 10) + 1;
var userName = "Alexandria";
console.log(randomNumber);

if (randomNumber >= 1 && randomNumber <= 3){
    console.log(userName.slice(0, 3));
} else if (randomNumber >= 4 && randomNumber <= 7){
    console.log(userName.slice(0, 6));
} else {
    console.log(userName.slice(0, 8));
}


/* ----- 2 ----- */

var randomNumber2 = Math.floor(Math.random() * 4) + 1;
var name = "Abbos";

if (randomNumber2 === 1){
    console.log(`Dear ${name}, wishing you a day filled with happiness and a year filled with joy.`);
} else if (randomNumber2 === 2){
    console.log(`Dear ${name}, sending you smiles for every moment of your special day.`);
} else if ( randomNumber2 === 3){
    console.log(`Dear ${name}, have a wonderful time and a very happy day!`);
} else {
    console.log(`Dear ${name}, hope your special day brings you all that your heart desires!`);
}