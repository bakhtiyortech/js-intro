/* ----- 1 ----- */

var randomNumber = Math.floor(Math.random() * 10) + 1;
var name;

if (randomNumber >= 1 && randomNumber <= 3){
    name = "Jon";
} else if (randomNumber >= 4 && randomNumber <= 7){
    name = "Shokir";
} else {
    name = "Jennifer";
}


var randomNumber2 = Math.floor(Math.random() * 4) + 1;

if (randomNumber2 === 1){
    console.log(`Dear ${name}, wishing you a day filled with happiness and a year filled with joy.`);
} else if (randomNumber2 === 2){
    console.log(`Dear ${name}, sending you smiles for every moment of your special day.`);
} else if ( randomNumber2 === 3){
    console.log(`Dear ${name}, have a wonderful time and a very happy day!`);
} else {
    console.log(`Dear ${name}, hope your special day brings you all that your heart desires!`);
}